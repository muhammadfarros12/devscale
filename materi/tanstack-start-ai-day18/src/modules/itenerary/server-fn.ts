import { createServerFn } from "@tanstack/react-start";
import { zodResponseFormat } from "openai/helpers/zod";
import z from "zod";
import { openai } from "@/utils/openai";

const IteneraryItem = z.object({
	numberOfDay: z.number(),
	time: z.enum(["morning", "afternoon", "evening"]),
	place: z.string(),
	location: z.string(),
	activity: z.string(),
});

const IteneraryResponseSchema = z.object({
	city: z.string(),
	days: z.number(),
	budget: z.number(),
	items: z.array(IteneraryItem),
});

export type ItenerarySchema = z.infer<typeof IteneraryResponseSchema>;

const SYSTEM_PROMPT = `
	You are a good itenerary planner, that always give good places to visit based on user context

`;

export const createItenerary = createServerFn({ method: "POST" })
	.inputValidator(
		(data: { city: string; days: number; budget: number }) => data,
	)
	.handler(async ({ data }) => {
		const userPrompt = `
			User Context:

			- Destination city: ${data.city}
			- Number of days: ${data.days}
			- Budget per day: IDR ${data.budget}

			
		`;

		const res = await openai.chat.completions.parse({
			model: "google/gemini-3-flash-preview",
			max_tokens: 2000,
			messages: [
				// { role: "system", content: "Kamu harus menjawab dalam bentuk puisi"},
				{ role: "system", content: SYSTEM_PROMPT },
				{
					role: "user",
					content: userPrompt,
				},
			],
			response_format: zodResponseFormat(IteneraryResponseSchema, "itinerary"),
		});

		const result = res.choices[0].message.parsed;

		console.log(result);

		return result;
	});

// export const getStories = createServerFn().handler(async () => {
// 	return prisma.story.findMany();
// });

// export const getStoryById = createServerFn()
// 	.inputValidator((data: { id: number }) => data)
// 	.handler(async ({ data }) => {
// 		return prisma.story.findUnique({
// 			where: {
// 				id: data.id,
// 			},
// 		});
// 	});
