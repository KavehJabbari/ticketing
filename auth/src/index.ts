import mongoose from "mongoose";
import { app } from "./app";

let PORT = 3000;

//PORT = 3100;
//process.env.JWT_KEY = "asdf";
//process.env.MONGO_URI = "mongodb://127.0.0.1:27017/auth";

const start = async () => {
  console.log("Starting up...");
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("JWT_KEY must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
