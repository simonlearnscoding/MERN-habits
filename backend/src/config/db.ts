// lib/dbConnect.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || process.env.DB;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI (or DB) environment variable");
}

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if unable to connect
  }
};

export default connectDB;
