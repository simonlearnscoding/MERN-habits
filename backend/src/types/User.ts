import mongoose, { Document } from "mongoose";
export interface User extends Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  habits: mongoose.Types.ObjectId[];
  friends: mongoose.Types.ObjectId[];
}
