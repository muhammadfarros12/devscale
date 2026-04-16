import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { createStory } from "#/modules/stories/server-fn";
import { Button } from "#/components/ui/button";
import { Textarea } from "#/components/ui/textarea";
import ReactMarkdown from "react-markdown";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const [topic, setTopic] = useState("");
	const [result, setResult] = useState<string | null>("");
	const [isLoading, setIsLoading] = useState(false);

	// async function handleCreateStory() {
	// 	setIsLoading(true);
	// 	const res = await createStory({
	// 		data: {
	// 			topic: topic,
	// 		},
	// 	});
	// 	setResult(res);
	// 	setIsLoading(false);
	// }

	async function handleCreateStory() {
		setIsLoading(true);
		try {
			const res = await createStory({
				data: {
					topic: topic,
				},
			});
			setResult(res);
		} catch (error) {
			console.error("Error:", error);
			setResult(`Error: ${error}`);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="max-w-2xl m-auto my-12 space-y-8">
			<section className="space-y-4">
				<h3 className="text-lg font-medium tracking-tight">
					Create Kids Story
				</h3>
				<Textarea
					value={topic}
					placeholder="Story you'd like to craft..."
					onChange={(e) => setTopic(e.target.value)}
				></Textarea>
				<Button disabled={isLoading} onClick={handleCreateStory}>
					Create
				</Button>
			</section>
			<section>
				{isLoading ? (
					"generating..."
				) : (
					<div className="prose">
						<ReactMarkdown>{result}</ReactMarkdown>
					</div>
				)}{" "}
			</section>
		</div>
	);
}
