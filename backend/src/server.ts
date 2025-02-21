import app from "./app.js";
import dbConnect from "./config/db.js";
import dotenv from "dotenv";

console.log(`Node.js version: ${process.version}`);
dotenv.config();
//
dbConnect(); // Connects to MongoDB
//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
