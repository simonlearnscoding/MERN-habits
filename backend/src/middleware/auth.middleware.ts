import { Request, Response, NextFunction } from "express";
import User from "./../models/User";

const auth0UserCheck = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log("req.user", req);
    next();
  } catch (error) {
    console.error("Error in auth0UserCheck middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default auth0UserCheck;
