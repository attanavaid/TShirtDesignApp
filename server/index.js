import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

// Setup Environment Variables
dotenv.config();

// Middleware Setup
const app = express();
app.use(cors()); // To prevent CORS policy errors
app.use(express.json({ limit: "50mb" })); // L:imit the payload

// Routes
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello from DALL.E!" });
});

app.listen(8080, () => console.log("Server has started on port 8080."));