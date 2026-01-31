import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-screen flex justify-center items-center">
			<main className="w-[320px] p-4 space-y-6">
				<section className="text-center">
					<h3>Sign up</h3>
					<p>Create account to continue</p>
				</section>
                <section className="space-y-2">
				<input type="text" placeholder="email@gmail.com" />
				<input type="text" placeholder="password" />
				<button type="button">Register</button>
                </section>
			</main>
		</div>
	);
}
