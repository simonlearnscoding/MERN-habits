import { asyncHandler, AppError } from "../errors/errorMiddleware";

export const handleCheckAuth = asyncHandler(async (req, res) => {
  // console.log("hello nice to meet you", req);

  //@ts-ignore
  console.log("is auth", req.user);

  //@ts-ignore
  const authenticated: boolean = typeof req.user !== "undefined";
  return (
    //@ts-ignore
    res.json({ isAuthenticated: authenticated, user: req.user })
  );
});

export const handleLogout = asyncHandler(async (req, res) => {
  //TODO: I Need to extend the express.Request interface to include the logout method
  //@ts-ignore
  req.logout();
  res.json({ message: "Logged out" });
});
