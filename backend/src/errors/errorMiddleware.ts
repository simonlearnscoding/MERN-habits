import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Centralized error handler middleware
export const errorHandler = (
  err: any, // Accept any error
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // If the error isn't an instance of AppError, wrap it in one
  const error =
    err instanceof AppError
      ? err
      : new AppError(
          err.message || "Internal Server Error",
          err.statusCode || 500,
        );

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};

// Wrapper to handle async errors automatically
export const asyncHandler =
  <T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
