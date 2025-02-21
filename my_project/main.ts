import express from "npm:express";
import dotenv from "npm:dotenv";
const app = express();
import "jsr:@std/dotenv/load";

app.get("/", (req: any, res: any) => {
  res.send("Welcome to the Dinosaur API!");
});

const PORT = Deno.env.get("PORT") || 5800;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
