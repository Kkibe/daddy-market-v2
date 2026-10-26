import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { PiXLogo } from 'react-icons/pi';

export const appName = 'Daddy Market';

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const products = [
  {
    id: '1',
    title: 'Fresh Red Onions',
    description:
      'Farm-fresh red onions, great for cooking. Hand-picked and sorted.',
    price: 850,
    image:
      /*px(1306559)*/ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEk00LprgLzbQuqaY_xupcRLjxCI9DFUbDM_FSzlkRgJ846PZes599R8BW&s=10',
    images: [
      /*px(1306559)*/ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEk00LprgLzbQuqaY_xupcRLjxCI9DFUbDM_FSzlkRgJ846PZes599R8BW&s=10',
    ],
    features: ['10kg net', 'Farm fresh', 'Long shelf life'],
    colors: ['#c1121f', '#fdf0d5'],
    stock: 40,
    categories: ['vegetables', 'fresh'],
    stars: 4.2,
    rating: '4.2',
  },
  {
    id: '2',
    title: 'KPL Classic long grain rice',
    description:
      'Natural long grain rice, perfect for everyday meals. Sourced from top farms.',
    price: 5200,
    image:
      /*px(1393382)*/ 'https://cdn.mafrservices.com/sys-master-root/hf8/h21/26757458329630/159253_main.jpg?im=Resize=(300,300)',
    images: [
      /*px(1393382)*/ 'https://cdn.mafrservices.com/sys-master-root/hf8/h21/26757458329630/159253_main.jpg?im=Resize=(300,300)',
      px(1393380),
    ],
    features: ['50kg sack', 'Long grain', 'Naturally grown', 'Premium quality'],
    colors: ['#d4a373', '#fefae0'],
    stock: 24,
    categories: ['cereals', 'staples'],
    stars: 4.5,
    rating: '4.5',
  },
  {
    id: '3',
    title: 'Pearl Pure Sunflower Cooking Oil 5L',
    description:
      'Refined sunflower oil, cholesterol-free. Ideal for frying and baking.',
    price: 1450,
    image:
      /*px(33883)*/ 'https://edibleoilfactory.com/wp-content/uploads/2024/12/6-105.jpg',
    images: [
      /*px(33883)*/ 'https://edibleoilfactory.com/wp-content/uploads/2024/12/6-105.jpg',
    ],
    features: ['5 litres', 'Cholesterol free', 'Refined', 'Heart healthy'],
    colors: ['#ffd60a', '#f1faee'],
    stock: 30,
    categories: ['pantry', 'cooking'],
    stars: 4.7,
    rating: '4.7',
  },
  {
    id: '4',
    title: 'Fresh Tomatoes Crate 20kg',
    description:
      'Ripe red tomatoes, perfect for sauces and salads. Delivered fresh daily.',
    price: 2400,
    image:
      'https://thumbs.dreamstime.com/b/red-tomatoes-plastic-crates-outdoor-market-other-hold-various-fruits-vegetables-nearby-scene-captures-vibrant-411777989.jpg',
    images: [
      'https://thumbs.dreamstime.com/b/red-tomatoes-plastic-crates-outdoor-market-other-hold-various-fruits-vegetables-nearby-scene-captures-vibrant-411777989.jpg',
    ],
    features: ['20kg crate', 'Vine ripened', 'Fresh daily'],
    colors: ['#e63946', '#f1faee'],
    stock: 18,
    categories: ['vegetables', 'fresh'],
    stars: 4.3,
    rating: '4.3',
  },
  {
    id: '5',
    title: 'Butterfly Whole Wheat Flour 2kg',
    description:
      'Stone-milled whole wheat flour, rich in fiber. Great for bread and chapati.',
    price: 180,
    image:
      /*px(1410533)*/ 'https://spiceworldltd.co.ke/wp-content/uploads/2023/09/attamark1fw-650c5044aba20.webp',
    images: [
      /*px(1410533)*/ 'https://spiceworldltd.co.ke/wp-content/uploads/2023/09/attamark1fw-650c5044aba20.webp',
    ],
    features: ['2kg bag', 'Stone milled', 'High fiber', 'Whole wheat'],
    colors: ['#ddbea9', '#f7f1e3'],
    stock: 22,
    categories: ['cereals', 'pantry'],
    stars: 4.6,
    rating: '4.6',
  },
  {
    id: '6',
    title: 'Shangi Fresh Potatoes Sack 50kg',
    description: 'Grade A potatoes, versatile for boiling, frying, and baking.',
    price: 3000,
    image:
      /*px(2286776)*/ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_ZhCHAaRXodXPYzl-g0l2HDArUTpe2Xlmjz0W1dcjWHo58amUY4L9phJ&s=10',
    images: [
      /*px(2286776)*/ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_ZhCHAaRXodXPYzl-g0l2HDArUTpe2Xlmjz0W1dcjWHo58amUY4L9phJ&s=10',
    ],
    features: ['50kg sack', 'Grade A', 'Versatile', 'Locally grown'],
    colors: ['#a98467', '#f3e9d9'],
    stock: 15,
    categories: ['vegetables', 'staples'],
    stars: 4.4,
    rating: '4.4',
  },
  {
    id: '7',
    title: 'Kabras Refined White Sugar 2kg',
    description: 'Pure refined white sugar, perfect for beverages and baking.',
    price: 250,
    image:
      'https://res.cloudinary.com/dd2llu4dp/image/upload/c_limit,f_auto,q_auto:good,dpr_auto,w_1200/kabras-sugar-2kg_pevyprice_nsyqq0',
    images: [
      'https://res.cloudinary.com/dd2llu4dp/image/upload/c_limit,f_auto,q_auto:good,dpr_auto,w_1200/kabras-sugar-2kg_pevyprice_nsyqq0',
    ],
    features: ['25kg bag', 'Refined', 'Pure', 'Granulated'],
    colors: ['#f8f9fa', '#dee2e6'],
    stock: 35,
    categories: ['pantry', 'staples'],
    stars: 4.1,
    rating: '4.1',
  },
  {
    id: '8',
    title: 'Ololo Fresh Eggs Tray (30 pcs)',
    description:
      'Farm-fresh free-range eggs, rich in protein. Delivered in protective trays.',
    price: 480,
    image:
      'https://greenspoon.co.ke/wp-content/uploads/2022/03/Greenspoon-Kenya-Ololo-Farm-Eggs-Tray-of-30.jpg',
    images: [
      'https://greenspoon.co.ke/wp-content/uploads/2022/03/Greenspoon-Kenya-Ololo-Farm-Eggs-Tray-of-30.jpg',
    ],
    features: ['30 eggs', 'Free range', 'Farm fresh', 'Grade A'],
    colors: ['#f4a261', '#fefae0'],
    stock: 50,
    categories: ['dairy', 'protein'],
    stars: 4.8,
    rating: '4.8',
  },
  {
    id: '9',
    title: 'Dried Maize 90kg Bag',
    description:
      'Dried maize grains, ideal for milling. Clean and well-sorted.',
    price: 4100,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJN8NGpXae7U4IS6IaLM_Y30DfOXEmNwkifc-d_vvSgKNGFUmJtnJa8EjI&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJN8NGpXae7U4IS6IaLM_Y30DfOXEmNwkifc-d_vvSgKNGFUmJtnJa8EjI&s=10',
    ],
    features: ['90kg bag', 'Dried', 'Well sorted', 'Mill grade'],
    colors: ['#e9c46a', '#f1faee'],
    stock: 12,
    categories: ['cereals', 'staples'],
    stars: 4.0,
    rating: '4.0',
  },
  {
    id: '10',
    title: 'Fresh Spinach Bunches (20)',
    description:
      'Crisp leafy spinach, packed with iron. Harvested and delivered same day.',
    price: 600,
    image:
      'https://clubcascadasdebaja.com.mx/wp-content/uploads/2024/05/02spinach.png',
    images: [
      'https://clubcascadasdebaja.com.mx/wp-content/uploads/2024/05/02spinach.png',
    ],
    features: ['20 bunches', 'Iron rich', 'Same-day harvest', 'Leafy greens'],
    colors: ['#2a9d8f', '#e9f5db'],
    stock: 28,
    categories: ['vegetables', 'fresh'],
    stars: 4.5,
    rating: '4.5',
  },
  {
    id: '11',
    title: 'Kensalt Premium Cooking Sea Salt 1kg',
    description:
      'Iodized table salt, essential for every kitchen. Fine granulated.',
    price: 350,
    image:
      'https://greenspoon.co.ke/wp-content/uploads/2024/07/Greenspoon-500-1400x933.jpg',
    images: [
      'https://greenspoon.co.ke/wp-content/uploads/2024/07/Greenspoon-500-1400x933.jpg',
    ],
    features: ['1kg', 'Iodized', 'Fine granulated', 'Food grade'],
    colors: ['#e9ecef', '#f8f9fa'],
    stock: 60,
    categories: ['pantry', 'staples'],
    stars: 4.2,
    rating: '4.2',
  },
  {
    id: '12',
    title: 'Meru Bananas Bunch (3kg)',
    description:
      'Sweet ripe bananas, naturally ripened. Great for snacking and smoothies.',
    price: 200,
    image:
      'https://greenspoon.co.ke/wp-content/uploads/2021/11/Greenspoon-541.jpg',
    images: [
      'https://greenspoon.co.ke/wp-content/uploads/2021/11/Greenspoon-541.jpg',
    ],
    features: ['3kg bunch', 'Naturally ripened', 'Sweet', 'Fresh'],
    colors: ['#f4d35e', '#fef9ef'],
    stock: 20,
    categories: ['fruits', 'fresh'],
    stars: 4.6,
    rating: '4.6',
  },
  {
    id: '13',
    title: 'Fresh Carrots Sack 25kg',
    description:
      'Crunchy farm-fresh carrots, rich in beta-carotene. Great for juicing and cooking.',
    price: 1800,
    image:
      'https://harvesttotable.com/wp-content/uploads/2016/08/bigstock-Fresh-Dug-Carrots-5970768-1024x683.jpg',
    images: [
      'https://harvesttotable.com/wp-content/uploads/2016/08/bigstock-Fresh-Dug-Carrots-5970768-1024x683.jpg',
    ],
    features: ['25kg sack', 'Farm fresh', 'Beta-carotene rich', 'Grade A'],
    colors: ['#e76f51', '#fef9ef'],
    stock: 25,
    categories: ['vegetables', 'fresh'],
    stars: 4.4,
    rating: '4.4',
  },
  {
    id: '14',
    title: 'Lea Premium Wheat Flour 2kg',
    description:
      'All-purpose wheat flour, finely milled. Perfect for baking cakes and pastries.',
    price: 220,
    image:
      'https://d16zmt6hgq1jhj.cloudfront.net/product/32160/jjpkYUtGOTNRP0WSkg1FPmEE2qPo9vGLhaq7EAa7.png',
    images: [
      'https://d16zmt6hgq1jhj.cloudfront.net/product/32160/jjpkYUtGOTNRP0WSkg1FPmEE2qPo9vGLhaq7EAa7.png',
    ],
    features: ['2kg pack', 'All purpose', 'Finely milled', 'Baking grade'],
    colors: ['#ddbea9', '#f7f1e3'],
    stock: 80,
    categories: ['pantry', 'baking'],
    stars: 4.5,
    rating: '4.5',
  },
  {
    id: '15',
    title: 'Fresh Cabbage Heads',
    description:
      'Crisp green cabbage heads, great for salads and stews. Hand-picked fresh.',
    price: 70,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwT5TR20pdtEnEGe9ZqmAI8u_gohgCV-7OlBaMsXjLKXLW_72vCx0FZo&s=10',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwT5TR20pdtEnEGe9ZqmAI8u_gohgCV-7OlBaMsXjLKXLW_72vCx0FZo&s=10',
    ],
    features: ['Crisp', 'Hand-picked', 'Fresh'],
    colors: ['#2a9d8f', '#e9f5db'],
    stock: 32,
    categories: ['vegetables', 'fresh'],
    stars: 4.1,
    rating: '4.1',
  },
  {
    id: '16',
    title: 'Red Lentils 5kg',
    description:
      'Quick-cooking red lentils, high in protein and fiber. Perfect for soups and stews.',
    price: 650,
    image:
      'https://cdn.prod.website-files.com/68b8f421c8dab2f7c8a448aa/6912928c886036f09cb75a68_Red-Lentils---Grid-Image.webp',
    images: [
      'https://cdn.prod.website-files.com/68b8f421c8dab2f7c8a448aa/6912928c886036f09cb75a68_Red-Lentils---Grid-Image.webp',
    ],
    features: ['5kg bag', 'Quick cooking', 'High protein', 'High fiber'],
    colors: ['#c1121f', '#fdf0d5'],
    stock: 45,
    categories: ['pantry', 'protein'],
    stars: 4.6,
    rating: '4.6',
  },
  {
    id: '17',
    title: 'Fresh Mangoes Box (5kg)',
    description:
      'Sweet juicy mangoes, tree-ripened. Great for snacking, smoothies, and desserts.',
    price: 250,
    image:
      'https://barleylandsfarmshop.com/cdn/shop/files/IMG-2393_800x.jpg?v=1701530331',
    images: [
      'https://barleylandsfarmshop.com/cdn/shop/files/IMG-2393_800x.jpg?v=1701530331',
    ],
    features: ['5kg box', 'Tree ripened', 'Sweet', 'Juicy'],
    colors: ['#f4a261', '#fef9ef'],
    stock: 22,
    categories: ['fruits', 'fresh'],
    stars: 4.7,
    rating: '4.7',
  },
  {
    id: '18',
    title: 'Haricot Dried Beans 1kg',
    description:
      'Quality dried beans, rich in protein. Great for stews, soups, and salads.',
    price: 200,
    image:
      'https://spiceworldltd.co.ke/wp-content/uploads/2023/09/wairimu-haricot-64fe200e3469e.webp',
    images: [
      'https://spiceworldltd.co.ke/wp-content/uploads/2023/09/wairimu-haricot-64fe200e3469e.webp',
    ],
    features: ['1kg bag', 'High protein', 'Dried', 'Well sorted'],
    colors: ['#a98467', '#f3e9d9'],
    stock: 38,
    categories: ['pantry', 'protein'],
    stars: 4.3,
    rating: '4.3',
  },
  {
    id: '19',
    title: 'Fresh Organic Hass Avocados (20 pcs)',
    description:
      'Ripe creamy avocados, perfect for salads and sandwiches. Delivered fresh.',
    price: 800,
    image:
      'https://images.squarespace-cdn.com/content/v1/52e42689e4b015483fbf2e93/1426813727960-J0I79SNTMYNNKW1FIYN7/IMG_6195.jpg?format=1000w',
    images: [
      'https://images.squarespace-cdn.com/content/v1/52e42689e4b015483fbf2e93/1426813727960-J0I79SNTMYNNKW1FIYN7/IMG_6195.jpg?format=1000w',
    ],
    features: ['20 pieces', 'Ripe', 'Creamy', 'Fresh'],
    colors: ['#2a9d8f', '#e9f5db'],
    stock: 30,
    categories: ['fruits', 'fresh'],
    stars: 4.8,
    rating: '4.8',
  },
  {
    id: '20',
    title: 'Kericho Gold Premium Tea Leaves 1kg',
    description:
      'Aromatic black tea leaves, carefully selected. Rich flavor and deep color.',
    price: 800,
    image:
      'https://cdn.mafrservices.com/pim-content/KEN/media/product/8257/1717589404/8257_main.jpg',
    images: [
      'https://cdn.mafrservices.com/pim-content/KEN/media/product/8257/1717589404/8257_main.jpg',
    ],
    features: ['1kg pack', 'Aromatic', 'Rich flavor', 'Premium grade'],
    colors: ['#ddbea9', '#f7f1e3'],
    stock: 55,
    categories: ['pantry', 'beverages'],
    stars: 4.5,
    rating: '4.5',
  },
];

export const socialUrls = [
  {
    id: 5,
    icon: <FaInstagram />,
    url: 'https://instagram.com/goalgenius.vip',
    title: 'Instagram',
  },
  {
    id: 1,
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/profile.php?id=61570224237201',
    title: 'Facebook',
  },
  {
    id: 4,
    icon: <PiXLogo />,
    url: 'https://x.com/goalgeniusvip',
    title: 'X (Twitter)',
  },
  {
    id: 2,
    icon: <FaTelegram />,
    url: 'https://t.me/bet365gurus',
    title: 'Telegram',
  },
  {
    id: 3,
    icon: <IoLogoWhatsapp />,
    url: 'https://whatsapp.com/channel/0029VayjRf71t90afonqcy0b',
    title: 'WhatsApp',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Grace Wanjiku',
    comment:
      'Daddy Market delivers fresh produce right to my door. The quality is consistently excellent and prices are fair.',
    stars: 4.5,
  },
  {
    id: '2',
    name: 'Peter Kamau',
    comment:
      'I order my monthly groceries here. Fast delivery and the M-Pesa checkout is so convenient.',
    stars: 5,
  },
  {
    id: '3',
    name: 'Aisha Mohammed',
    comment:
      'Great variety of fresh vegetables and staples. The 50kg rice sack is a great deal for my family.',
    stars: 4.5,
  },
  {
    id: '4',
    name: 'Brian Otieno',
    comment:
      'Reliable service and quality products. My go-to for bulk grocery shopping in Nairobi.',
    stars: 5,
  },
];

export const faqs = [
  {
    id: '1',
    question: 'How long does delivery take?',
    answer:
      'Orders within Nairobi are delivered within 24 hours. For other regions, delivery takes 2-3 business days depending on your location.',
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer:
      'We accept M-Pesa, bank transfers, and card payments (Visa, Mastercard). You can choose to pay 50% upfront or the full amount at checkout.',
  },
  {
    id: '3',
    question: 'Can I return damaged or spoiled items?',
    answer:
      'Yes. If you receive damaged or spoiled items, contact us within 24 hours of delivery with a photo, and we will arrange a replacement or refund.',
  },
  {
    id: '4',
    question: 'Do you offer bulk discounts?',
    answer:
      'Yes! For orders above KES 20,000, we offer a 5% discount. Contact our support team for custom bulk pricing on large orders.',
  },
  {
    id: '5',
    question: 'Which areas do you deliver to?',
    answer:
      'We currently deliver across Nairobi and its environs including Kangemi, Ndumbuini, Uthiru, and the CBD. We are expanding to more regions soon.',
  },
  {
    id: '6',
    question: 'How do I track my order?',
    answer:
      'Once your order is placed, you will receive a confirmation with your order ID. You can track the status of your order through your profile page.',
  },
];

export const categories = [
  { id: 1, title: 'Cereals', image: px(1393382), link: '/shop' },
  { id: 2, title: 'Dairy', image: px(6804191), link: '/shop' },
  { id: 3, title: 'Fruits', image: px(30740199), link: '/shop' },
  { id: 4, title: 'Vegetables', image: px(37321079), link: '/shop' },
  { id: 5, title: 'Protein', image: px(3029526), link: '/shop' },
  { id: 6, title: 'Pantry', image: px(8581021), link: '/shop' },
];
