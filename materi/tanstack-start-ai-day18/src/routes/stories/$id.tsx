import { getStoryById } from "#/modules/stories/server-fn";
import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

export const Route = createFileRoute("/stories/$id")({
	component: RouteComponent,
	loader: ({ params }) => getStoryById({ data: { id: Number(params.id) } }),
});

function RouteComponent() {
	const story = Route.useLoaderData();

	if (!story) {
		return <div>Not found bro!</div>;
	}
	return (
		<div>
			<div className="prose max-w-2xl m-auto my-12">
				<ReactMarkdown>{story.content}</ReactMarkdown>
			</div>
		</div>
	);
}
