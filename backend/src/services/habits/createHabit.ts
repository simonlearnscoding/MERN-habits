import Habit from "../../models/Habit";
import IHabit from "./../../types/Habit";

export default async function createHabit(
  data: Partial<IHabit>,
): Promise<IHabit> {
  const habit = new Habit(data);
  return await habit.save();
}
