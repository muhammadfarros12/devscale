import { createFileRoute } from "@tanstack/react-router";
import { createNote } from "#/modules/todos/server-fn";

export const Route = createFileRoute("/")({ component: App });

function App() {
	async function handleCreateNote() {
		await createNote({ data: { input: "Hello World" } });
	}

	return (
		<div>
			<button type="button" onClick={handleCreateNote}>
				Hello
			</button>
		</div>
	);
}
