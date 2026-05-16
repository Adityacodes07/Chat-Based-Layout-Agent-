import OpenAI from "openai";
import { buildPrompt } from "../utils/promptBuilder";
import { extractJson } from "../utils/extractJson";

const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error("OpenRouter API key is missing. Add VITE_OPENROUTER_API_KEY to your .env file.");
}

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey,
  dangerouslyAllowBrowser: true,
});

export async function updateLayoutWithAI(layoutJson, instruction) {
  const prompt = buildPrompt(layoutJson, instruction);

  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "system",
          content:
            "You are a design layout assistant. Return only valid JSON and no markdown.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
    });

    const text = completion.choices[0].message.content;

    if (!text) {
      throw new Error("No response received from OpenRouter.");
    }

    return extractJson(text);
  } catch (error) {
    console.error("OpenRouter Error:", error);
    throw new Error(error.message || "Failed to update layout.", { cause: error });
  }
}