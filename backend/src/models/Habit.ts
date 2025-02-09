import mongoose, { Schema } from "mongoose";
import Habit from "../types/Habit";
const HabitSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Habit ||
  mongoose.model<Habit>("Habit", HabitSchema);
