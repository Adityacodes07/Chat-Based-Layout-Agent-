import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildPrompt } from '../utils/promptBuilder';
import { extractJson } from '../utils/extractJson';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn('Gemini API key is missing. Add VITE_GEMINI_API_KEY to .env');
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export async function updateLayoutWithAI(layoutJson, instruction) {
  const prompt = buildPrompt(layoutJson, instruction);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return extractJson(text);
}