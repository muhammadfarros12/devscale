import { useLogin } from "@/modules/auth/hooks/useLogin";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { mutate: submitLogin, isPending } = useLogin();

	function handleSubmitForm(event: React.FormEvent) {
		event.preventDefault();
		submitLogin({ email, password });
	}

	return (
		<div className="h-screen flex justify-center items-center">
			<main className="w-[320px] p-4 space-y-6">
				<section className="text-center">
					<h3>Sign in</h3>
					<p>Login to continue</p>
				</section>
				<form className="space-y-2" onSubmit={handleSubmitForm}>
					<input
						type="email"
						placeholder="email@gmail.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button disabled={isPending} type="submit">
						{isPending ? "Logging in..." : "Login"}
					</button>
				</form>
				<section className="text-center">
					<p>
						Don't have an account? <Link to="/register">register</Link>
					</p>
				</section>
			</main>
		</div>
	);
}
