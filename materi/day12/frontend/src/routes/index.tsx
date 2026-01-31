import { MockTodos } from "@/modules/mockTodos/components/mockTodos";
import { MockTodosFeatured } from "@/modules/mockTodos/components/mockTodosFeatured";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
	// loader: async () => {
	// 	const res = await fetch("http://localhost:8000/mock-todos");
	// 	const data = await res.json();
	// 	return data;
	// },
});

function App() {
	// const data = Route.useLoaderData()
	// console.log(data)
	return (
		<div>
			<div>Todos: </div>
      <div className="grid grid-cols-2">
			<MockTodos />
      <MockTodosFeatured />
      </div>
		</div>
	);
}
