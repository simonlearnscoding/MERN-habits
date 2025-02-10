import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { User as IUser } from "../types/User";
import { asyncHandler, AppError } from "../errors/errorMiddleware";
import passport from "../config/passport";

//@ts-ignore
export const handleLogin = asyncHandler(async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    //@ts-ignore
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ isAuthenticated: true, user });
    });
  })(req, res, next);
});

export const handleGetUsers = asyncHandler(
  async (req: Request, res: Response) => {
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
    const { email, name, password } = req.body;

    console.log("post body:", req.body);
    if (!email || !name || !password) {
      throw new AppError("Email, name, and password are required", 400);
    }

    let existingUser: IUser | null = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      res.status(409).json({ message: "User already exists" });
      throw new AppError("User already exists", 409);
    }

    const user: IUser = await User.create({ email, name, password });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  },
);
