import { User } from "./User.js";
import { Document } from "mongoose";
import { Habit } from "./Habit.js";

export interface UserHabit extends Document {
  User: User;
  Habit: Habit;
  completedDate: Date;
  isCompleted: boolean;
}
