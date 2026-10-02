export type ProductData = {
  image: string;
  alt: string;
  category: string;
  name: string;
  price: number;
  isHit: boolean;
  isNovelty: boolean;
};

export type Product = ProductData & {
  _id: string;
};
