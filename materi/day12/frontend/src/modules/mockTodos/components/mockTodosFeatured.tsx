import useMockTodos from "../hooks/useMockTodos";

export const MockTodosFeatured = () => {
	const mockTodosQuery = useMockTodos()

	// console.log(mockTodosQuery.data)
	if (mockTodosQuery.isLoading) {
		return (
			<div className="bg-zinc-50 p-4 animate-pulse">Loading Mock Todos...</div>
		);
	}

	return (
		<div>
			<div>
				{mockTodosQuery.data?.slice(0, 3).map((todo) => {
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
