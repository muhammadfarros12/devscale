import { OpenAI } from "openai";

const apiKey = process.env.OPENROUTER_AI_KEY;
if (!apiKey) {
	throw new Error("OPENROUTER_AI_KEY is not set!");
}

console.log("API Key loaded:", `${apiKey.substring(0, 10)}...`); // Debug log

export const openai = new OpenAI({
	apiKey: apiKey,
	baseURL: "https://openrouter.ai/api/v1",
});
