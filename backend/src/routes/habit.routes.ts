import { Router } from "express";
import { createHabit } from "../controllers/habit.controller.js";

const router = Router();
router.post("/", createHabit);
export default router;
