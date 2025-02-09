import express from "express";
import cors from "cors";
import habitRoutes from "./routes/habit.routes";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./errors/errorMiddleware";

const app = express();
app.use(express.json());
app.use(cors());

// Mount your routes under API endpoints:
app.use("/habits", habitRoutes);
app.use("/users", userRoutes);
app.use(errorHandler);

export default app; // ES6 default export
