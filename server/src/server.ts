import express from "express";
import cors from "cors";
import { connectDb } from "./db/connect";

const app = express();

app.use(cors());
app.use(express.json());

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
