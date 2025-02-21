import { Router } from "express";
import {
  handleGetUsers,
  handleSignUp,
  handleLogin,
} from "../controllers/user.controller.js";

const router = Router();

// Authentication routes
router.post("/", handleSignUp);
router.post("/login", handleLogin);
router.get("/", handleGetUsers);

// Login success & failure handlers
// router.post("/login/failure",async  (req: Request, res: Response) => {
//   return res.status(401).json({ message: "Login failed" });
// });
// router.post("/login/success",async  (req: Request, res: Response) => {
//   return res.status(200).json({ message: "Login successful" });
// }

export default router;
