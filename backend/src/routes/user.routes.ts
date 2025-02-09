import { Router } from "express";
import {
  handleGetUsers,
  handleSignUp,
  handleLogin,
} from "../controllers/user.controller";

const router = Router();

// This endpoint should be called from the frontend after a successful login.
router.post("/", handleSignUp);
router.get("/", handleGetUsers);

router.post("/login", handleLogin);
export default router;
