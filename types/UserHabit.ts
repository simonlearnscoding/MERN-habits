import { User } from "./User";
import { Habit } from "./Habit";

export interface UserHabit extends Document {
  User: User;
  Habit: Habit;
  completedDate: Date;
  isCompleted: boolean;
}
