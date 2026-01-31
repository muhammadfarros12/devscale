import { useQuery } from "@tanstack/react-query";
import type { MockTodo } from "../types";

export const MockTodos = () => {
	// const {data, isLoading} = useQuery<MockTodo[]>({
	const mockTodosQuery = useQuery<MockTodo[]>({
		initialData: [],
		queryKey: [],
		queryFn: async () => {
			const res = await fetch("http://localhost:8000/mock-todos?throttle=true");
			const todos = await res.json();
			return todos;
		},
	});

	// console.log(mockTodosQuery.data)
	if (mockTodosQuery.isLoading) {
		return (
			<div className="bg-zinc-50 p-4 animate-pulse">Loading Mock Todos...</div>
		);
	}

	return (
		<div>
			<div>
				{mockTodosQuery.data.map((todo) => {
					return (
						<div key={todo.id}>
							<div>{todo.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
