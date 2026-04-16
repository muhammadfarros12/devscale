import { createServerFn } from "@tanstack/react-start";
import { openai } from "#/utils/openai";

const SYSTEM_PROMPT = `

	kamu adalah pembuat terbaik untuk cerita anak-anak, kamu akan membuat cerita yang menarik, mudah dipahami, dan penuh dengan imajinasi. ceritakan dengan gaya bahasa yang sederhana namun penuh warna, sehingga anak-anak dapat dengan mudah membayangkan dunia yang kamu ciptakan. pastikan cerita memiliki pesan moral yang baik dan mengajarkan nilai-nilai positif kepada anak-anak. buatlah cerita yang menyenangkan dan mendidik, sehingga anak-anak dapat belajar sambil menikmati petualangan yang kamu buat.

	<example_output>
	# [Story Title]

	[Story content]

	### Pesan untuk anak - anak:
	> [Moral lesson for kids]
	</example_output>

	<guidelines>
	- buat cerita pendek dengan judul yang menarik
	- gunakan bahasa yang sederhana dan mudah dipahami oleh anak-anak
	- maksimum 4 paragraf
	</guidelines>
`;

export const createStory = createServerFn({ method: "POST" })
	.inputValidator((data: { topic: string }) => data)
	.handler(async ({ data }) => {
		console.log(data.topic);

		const res = await openai.chat.completions.create({
			model: "google/gemini-3-flash-preview",
			max_tokens: 500,
			// model: "meta-llama/llama-3.2-3b-instruct:free", free model, but not good for story generation
			messages: [
				// { role: "system", content: "Kamu harus menjawab dalam bentuk puisi"},
				{ role: "system", content: SYSTEM_PROMPT },
				{
					role: "user",
					content: data.topic,
				},
			],
		});

		const result = res.choices[0].message.content;
		return result;
	});
