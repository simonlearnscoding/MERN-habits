import express from "express";
import { handleCheckAuth, handleLogout } from "../controllers/self.controller";

const router = express.Router();

router.get("/auth", handleCheckAuth);
router.get("/logout", handleLogout);

export default router;
