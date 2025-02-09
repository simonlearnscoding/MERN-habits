import express from "express";
import cors from "cors";
import habitRoutes from "./routes/habit.routes";
import userRoutes from "./routes/user.routes";
import selfRoutes from "./routes/self.routes";
import { errorHandler } from "./errors/errorMiddleware";
import User from "./models/User";

const app = express();
app.use(express.json());
app.use(cors());

// Auth related stuff
import session from "express-session";
import passport from "./config/passport";

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/habits", habitRoutes);
app.use("/users", userRoutes);
app.use("/self", selfRoutes);

// Err handling
app.use(errorHandler);

export default app; // ES6 default export
