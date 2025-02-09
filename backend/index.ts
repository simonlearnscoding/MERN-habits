import app from "./src/app"; // Import the default export
import dbConnect from "./src/config/db";
import dotenv from "dotenv";

console.log(`Node.js version: ${process.version}`);
dotenv.config();
dbConnect(); // Connects to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
