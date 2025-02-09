import { asyncHandler, AppError } from "../errors/errorMiddleware";

export const handleCheckAuth = asyncHandler(async (req, res) => {
  //@ts-ignore
  const authenticated: boolean = typeof req.user !== "undefined";
  return (
    //@ts-ignore
    res.json({ isAuthenticated: authenticated, user: req.user })
  );
});
