import { Document } from "mongoose";
export interface Habit extends Document {
  title: string;
  description?: string;
  createdAt: Date;
}
