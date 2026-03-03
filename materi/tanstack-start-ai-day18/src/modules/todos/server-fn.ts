import { createServerFn } from "@tanstack/react-start";

export const createNote = createServerFn({ method: "POST" })
	.inputValidator((data: { input: string }) => data)
	.handler(({ data }) => {
		console.log(data.input);
	});
