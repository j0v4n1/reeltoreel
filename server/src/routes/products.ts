import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product-controller";

const productRouter = Router();

productRouter.post("/products/add", addProduct);
productRouter.get("/products", getProducts);

export default productRouter;
