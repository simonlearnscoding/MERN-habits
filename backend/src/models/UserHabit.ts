import mongoose from "mongoose";
const { Schema } = mongoose;
import {UserHabit} from "./../types/UserHabit.js"; // Importing UserHabit type

const UserHabitSchema = new Schema({
  User: { type: Schema.Types.ObjectId, ref: "User" },
  Habit: { type: Schema.Types.ObjectId, ref: "Habit" },
  completedDate: { type: Date },
  isCompleted: { type: Boolean, default: false },
});

// Export with explicit typing to avoid TypeScript errors
module.exports =
  mongoose.models.UserHabit || mongoose.model("UserHabit", UserHabitSchema);
