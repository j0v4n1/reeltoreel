import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: String,
  alt: String,
  category: String,
  name: String,
  price: Number,
  isHit: Boolean,
  isNovelty: Boolean,
});

export const ProductModel = mongoose.model("Product", productSchema);
