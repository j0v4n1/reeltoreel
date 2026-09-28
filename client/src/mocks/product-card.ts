import { type ProductCard } from '../store/slices/product-slice';

const productCards = [
  {
    id: 1,
    image: '/images/vinil_player.png',
    alt: 'Виниловый плеер',
    category: 'Audio-Technica',
    name: 'AT-LPW40WN',
    price: 110000,
    isHit: false,
    isNew: false,
  },
  {
    id: 2,
    image: '/images/player.png',
    alt: 'Цифровой плеер',
    category: 'WiiM',
    name: 'Amp Pro Space Grey',
    price: 49970,
    isHit: true,
    isNew: true,
  },
  {
    id: 3,
    image: '/images/microphone.png',
    alt: 'Микрофон',
    category: 'shure',
    name: 'SM7B',
    price: 46490,
    isHit: false,
    isNew: false,
  },
  {
    id: 4,
    image: '/images/cable.png',
    alt: 'Кабель',
    category: 'HeadMade',
    name: 'Pro 2RCA - 3.5mm Black 1m',
    price: 2630,
    isHit: false,
    isNew: false,
  },
];

export const getProducts = (): Promise<ProductCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCards);
    }, 1000);
  });
};
