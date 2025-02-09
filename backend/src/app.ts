import express from "express";
import cors from "cors";
import habitRoutes from "./routes/habit.routes";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./errors/errorMiddleware";

const app = express();
app.use(express.json());
app.use(cors());

// Auth related stuff
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/habits", habitRoutes);
app.use("/users", userRoutes);

// Err handling
app.use(errorHandler);

export default app; // ES6 default export
