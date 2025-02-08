import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Middleware: Parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB using Mongoose
const mongoURI = process.env.MONGO_URI!;
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example route (you can expand with additional routes/controllers)
app.get("/", (req, res) => {
  res.send("Express + MongoDB Server is running!");
});

// You can add more routes here, for example to handle items for optimistic updates
// app.get('/items', ...)
// app.post('/items', ...)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
