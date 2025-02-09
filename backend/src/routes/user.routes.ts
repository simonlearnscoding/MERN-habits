import { Router } from "express";
import { handleGetUsers, handleSignUp } from "../controllers/user.controller";

const router = Router();

// This endpoint should be called from the frontend after a successful login.
router.post("/sign-up", handleSignUp);
router.get("/", handleGetUsers);
export default router;
