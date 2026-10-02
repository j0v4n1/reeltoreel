import express from "express";
import cors from "cors";
import { connectDb } from "./db/connect";
import productRouter from "./routes/products";
import path from "path";

const app = express();

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cors());
app.use(express.json());
app.use("/api", productRouter);

const start = async () => {
  try {
    await connectDb();
    console.log("Соединение с базой данных установлено");
    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен на ${process.env.PORT} порту!`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
