// hooks/useCartActions.js
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cartState } from '../recoil/atoms';
import { useNotification } from './useNotification';

export const useCartActions = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const resetCart = useResetRecoilState(cartState);
  const { showNotification } = useNotification();

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        /*showNotification({
          type: 'info',
          message: `${product.title} quantity updated in cart`,
        });*/
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      /*showNotification({
        type: 'success',
        message: `${product.title} added to cart`
      });*/
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification({
      type: 'success',
      message: `${product.title} added to cart`,
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    5; /*showNotification({
        type: 'info',
        message: 'Item removed from cart'
    });*/
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  /*const updateQuantity = (productId, quantity) => {
    const newQuantity = Math.max(1, Math.min(99, parseInt(quantity) || 1));
    setCart(prev =>
        prev.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        )
    );
};*/

  const clearCart = () => {
    resetCart();
    /*showNotification({
      type: 'info',
      message: 'Cart cleared',
    });*/
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};
