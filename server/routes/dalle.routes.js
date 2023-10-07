import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

// Setup Environment Variables
dotenv.config();

// Create router
const router = express.Router();

// Configure OpenAI
// Help: https://github.com/openai/openai-node/discussions/217
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Routes
router.route("/").get((request, response) => {
  response.status(200).json({ message: "Hello from DALL.E ROUTES!" });
});

router.route("/").post(async (request, response) => {
  try {
    const { prompt } = request.body;

    const AI_response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json"
    });

    const image = AI_response.data.data[0].b64_json;
    response.status(200).json({ photo: image });
  }

  catch (error) {
    console.error(error);
    response.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;