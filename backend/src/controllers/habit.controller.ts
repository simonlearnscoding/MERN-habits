import { Request, Response } from "express";
import service from "../services";

export async function createHabit(req: Request, res: Response): Promise<void> {
  try {
    const habit = await service.createHabit(req.body);
    res.status(201).json({ success: true, data: habit });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create habit" });
  }
}
