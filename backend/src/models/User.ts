import mongoose, { Schema } from "mongoose";
import { User } from "./../types/User.js";

const UserSchema: Schema = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  habits: [{ type: Schema.Types.ObjectId, ref: "Habit", default: [] }],
  friends: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
