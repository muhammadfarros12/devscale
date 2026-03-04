import { createFileRoute } from "@tanstack/react-router";
import { createNote } from "#/modules/todos/server-fn";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const [content, setContent] = useState("");
	async function handleCreateNote() {
		await createNote({ data: { input: content } });
	}

	return (
		<div>
			<input type="text" onChange={(e) => setContent(e.target.value)} />
			<button type="button" onClick={handleCreateNote}>
				Hello
			</button>
		</div>
	);
}
