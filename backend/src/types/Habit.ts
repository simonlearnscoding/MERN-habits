import { Document } from "mongoose";
export default interface Habit extends Document {
  title: string;
  description?: string;
  createdAt: Date;
}
