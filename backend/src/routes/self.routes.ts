import express from "express";
import { handleCheckAuth } from "../controllers/self.controller";

const router = express.Router();

router.get("/auth", handleCheckAuth);
export default router;
