import { createServerFn } from "@tanstack/react-start";
import { prisma } from "#/utils/prisma";

export const createNote = createServerFn({ method: "POST" })
	.inputValidator((data: { input: string }) => data)
	.handler(async ({ data }) => {
		const newTodo = await prisma.todo.create({
			data: {
				content: data.input,
			},
		});

		console.log(newTodo);
	});
