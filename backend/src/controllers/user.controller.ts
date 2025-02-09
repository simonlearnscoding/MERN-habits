import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { User as IUser } from "./../types/User";
import { asyncHandler, AppError } from "../errors/errorMiddleware";
import passport from "./../config/passport";

export const handleLogin = asyncHandler(async () => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  });
});

export const handleGetUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Fetch all users, excluding sensitive fields (e.g., password)
    const users: IUser[] = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  },
);

export const handleSignUp = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("hitting sign up route");
    const { email, name, password } = req.body;

    console.log("req.body", req.body);
    if (!email || !name || !password) {
      console.log("req.body");
      throw new AppError(`Email and name are required ${req.body}`, 400);
    }

    // Check if user already exists
    let existingUser: IUser | null = await User.findOne({ email });
    if (existingUser) {
      throw new AppError("User already exists", 409);
    }

    // Create new user

    const user: IUser = await User.create({ email, name, password });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  },
);
