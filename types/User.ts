import mongoose, { Document } from "mongoose";
export interface User extends Document {
  name: string;
  password: string;
  createdAt: Date;
  habits: mongoose.Types.ObjectId[];
  friends: mongoose.Types.ObjectId[];
}
