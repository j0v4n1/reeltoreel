import mongoose from "mongoose";
import "dotenv/config";

export const connectDb = async () => {
  await mongoose.connect(
    `mongodb://localhost:${process.env.PORT_DB}/${process.env.DB_NAME}`,
  );
};
