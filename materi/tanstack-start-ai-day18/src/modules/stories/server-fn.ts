import { createServerFn } from "@tanstack/react-start";
import { openai } from "#/utils/openai";

export const createStory = createServerFn({ method: "POST" })
	.inputValidator((data: { topic: string }) => data)
	.handler(async ({ data }) => {
		console.log(data.topic);

		const res = await openai.chat.completions.create({
			model: "google/gemini-3-flash-preview",
			max_tokens: 500,
			// model: "meta-llama/llama-3.2-3b-instruct:free", free model, but not good for story generation
			messages: [
				{
					role: "user",
					content: data.topic,
				},
			],
		});

		const result = res.choices[0].message.content;
		return result
	});
