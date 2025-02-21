import express from "express";
import cors from "cors";
import MongoStore from "connect-mongo";
import habitRoutes from "./routes/habit.routes.js";
import userRoutes from "./routes/user.routes.js";
import selfRoutes from "./routes/self.routes.js";
import { errorHandler } from "./errors/errorMiddleware.js";
import session from "express-session";
import { configurePassport } from "./config/passport.js";
import passport from "passport";
const app = express();
import dotenv from "dotenv";

configurePassport();
dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

// ── Session configuration ───────────────────────────────────────────
app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //@ts-ignore
  console.log("Session:", req.session);

  //@ts-ignore
  console.log("User:", req.user);
  next();
});
// Routes
app.use("/habits", habitRoutes);
app.use("/users", userRoutes);
app.use("/self", selfRoutes);
//
// Error handling
app.use(errorHandler);

export default app; // ES6 default export
