import { Request, Response } from "express";
import { Product, ProductData } from "../types/common";
import { ProductModel } from "../models/product";

export const addProduct = async (
  req: Request<{}, {}, ProductData>,
  res: Response,
) => {
  const product: ProductData = req.body;
  try {
    await ProductModel.create({
      image: product.image,
      alt: product.alt,
      category: product.category,
      name: product.name,
      price: product.price,
      isHit: product.isHit,
      isNovelty: product.isNovelty,
    });
    res.status(201).json({ message: "Успешно" });
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async (req: Request, res: Response<Product[]>) => {
  try {
    const products: Product[] = await ProductModel.find();
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};
