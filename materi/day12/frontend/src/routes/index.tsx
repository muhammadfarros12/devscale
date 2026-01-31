import { MockTodos } from "@/modules/mockTodos/components/mockTodos";
import { MockTodosFeatured } from "@/modules/mockTodos/components/mockTodosFeatured";
import { Profile } from "@/modules/profile/components/profile";
import { useProfile } from "@/modules/profile/hooks/useProfile";
import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "lucide-react";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { data, isLoading } = useProfile();

	return (
		<div>
			<header className="flex justify-between p-4 bg-zinc-50 border-b">
				<div>Todos</div>
				<Profile />
			</header>
			{/* delay menyebabkan error karena masih undefined */}
			{/* <h3>Todos of { data.data.email }:</h3> */}
			{isLoading ? (
				<Loader className="animate-spin w-4 h-4" />
			) : (
				<>Todos of {data.data.email}</>
			)}
			<div className="grid grid-cols-2">
				<MockTodos />
				<MockTodosFeatured />
			</div>
		</div>
	);
}
