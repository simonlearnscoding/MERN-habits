import express from "express";
import cors from "cors";
import habitRoutes from "./routes/habit.routes";
import userRoutes from "./routes/user.routes";
import selfRoutes from "./routes/self.routes";
import { errorHandler } from "./errors/errorMiddleware";
import session from "express-session";
import passport from "./config/passport";
const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Auth related stuff
app.use(
  session({
    secret: "cats",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    resave: false,
    secure: false,
    saveUninitialized: false,
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
