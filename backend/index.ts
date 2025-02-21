// Global error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

import app from "./src/app.js"; // Import the default export
import dbConnect from "./src/config/db.js";
import dotenv from "dotenv";

console.log(`Node.js version: ${process.version}`);
dotenv.config();
dbConnect(); // Connects to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
