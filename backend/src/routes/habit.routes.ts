import { Router } from "express";
import { createHabit } from "../controllers/habit.controller";

const router = Router();
router.post("/", createHabit);
export default router;
