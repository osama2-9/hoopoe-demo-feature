import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function databaseConnect() {
  try {
    await mongoose
      .connect(process.env.MONOGDB_URL)
      .then(() => {
        console.log("connected");
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(error);
    throw new Error("Database connect error", error.message);
  }
}

export { databaseConnect };
