// Payment service for the Rise Payment API
// Base URL: https://genuine-flow-production-b0ae.up.railway.app
// Endpoints discovered from the live API documentation.

const API_BASE_URL = 'https://genuine-flow-production-b0ae.up.railway.app';

async function parseResponse(response) {
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(
      `Unexpected response from payment server: ${text.slice(0, 200)}`
    );
  }
  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      `Payment request failed (${response.status})`;
    const err = new Error(message);
    err.status = response.status;
    err.data = data;
    throw err;
  }
  return data;
}

/**
 * Initiate an M-Pesa payment. Customer receives an STK push prompt on their phone.
 * Maps to: POST /api/initialize
 * @param {{ amount: string|number, currency?: string, phone: string, email?: string, fullname?: string, userId?: string, activation_type?: string, appId?: string }} payload
 */
export async function initiateMpesaPayment(payload) {
  const body = {
    appId: payload.appId,
    email: payload.email || '',
    amount: payload.amount,
    phone: payload.phone,
    userId: payload.userId || payload.fullname || 'anonymous',
    activation_type: payload.activation_type || 'account_activation',
  };
  const res = await fetch(`${API_BASE_URL}/api/initialize`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseResponse(res);
}

/**
 * Initiate a card payment with 3D Secure.
 * @param {{ amount: string|number, currency?: string, card_number: string, exp_month: string, exp_year: string, cvv: string, email?: string }} payload
 */
export async function initiateCardPayment(payload) {
  const body = {
    amount: String(payload.amount),
    currency: payload.currency || 'USD',
    card_number: payload.card_number,
    exp_month: payload.exp_month,
    exp_year: payload.exp_year,
    cvv: payload.cvv,
    email: payload.email || '',
  };
  const res = await fetch(`${API_BASE_URL}/api/flow/initiate/card`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseResponse(res);
}

/**
 * Initiate a bank transfer payment. Returns virtual account details for the customer.
 * @param {{ amount: string|number, currency?: string, email: string }} payload
 */
export async function initiateBankTransferPayment(payload) {
  const body = {
    amount: String(payload.amount),
    currency: payload.currency || 'NGN',
    email: payload.email,
  };
  const res = await fetch(`${API_BASE_URL}/api/flow/initiate/bank-transfer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return parseResponse(res);
}

/**
 * Check the status of a payment by checkoutId / tx_ref.
 * Maps to: GET /api/verify/:reference (or /api/status/:reference for polling)
 * @param {{ checkoutId: string, tx_ref?: string, appId?: string, polling?: boolean }} payload
 * @returns {Promise<{ success: boolean, status: string, transactionId: string|null, amount: string, reference: string, completedAt: string|null }>}
 */
export async function checkPaymentStatus(payload) {
  const reference = payload.checkoutId || payload.tx_ref;
  const path = payload.polling ? 'status' : 'verify';
  const query = payload.appId
    ? `?appId=${encodeURIComponent(payload.appId)}`
    : '';
  const res = await fetch(
    `${API_BASE_URL}/api/${path}/${encodeURIComponent(reference)}${query}`,
    { method: 'GET' }
  );
  return parseResponse(res);
}

/**
 * Verify a transaction by its Flutterwave id.
 * Maps to: GET /api/verify/:reference (using id as reference)
 * @param {{ id: number|string, appId?: string }} payload
 */
export async function verifyTransaction(payload) {
  const query = payload.appId
    ? `?appId=${encodeURIComponent(payload.appId)}`
    : '';
  const res = await fetch(
    `${API_BASE_URL}/api/verify/${encodeURIComponent(payload.id)}${query}`,
    { method: 'GET' }
  );
  return parseResponse(res);
}

/**
 * Poll payment status until it is no longer "pending", or until maxAttempts.
 * @param {{ checkoutId: string, tx_ref?: string, appId?: string, onUpdate?: (status) => void, intervalMs?: number, maxAttempts?: number }} opts
 * @returns {Promise<{ status: string, success: boolean }>}
 */
export async function pollPaymentStatus(opts) {
  const {
    checkoutId,
    tx_ref,
    appId,
    onUpdate,
    intervalMs = 4000,
    maxAttempts = 30,
  } = opts;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const result = await checkPaymentStatus({
        checkoutId,
        tx_ref,
        appId,
        polling: true,
      });
      const status = result.status || 'pending';
      onUpdate?.(status, result);
      if (status === 'success' || status === 'successful') {
        return { status: 'success', success: true, data: result };
      }
      if (
        status === 'failed' ||
        status === 'cancelled' ||
        status === 'reversed' ||
        status === 'abandoned'
      ) {
        return { status, success: false, data: result };
      }
    } catch (err) {
      onUpdate?.('error', { error: err.message });
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  return { status: 'timeout', success: false };
}

export const PAYMENT_METHODS = {
  MPESA: 'mpesa',
  CARD: 'card',
  BANK_TRANSFER: 'bank-transfer',
};

export const PAYMENT_API_BASE = API_BASE_URL;
