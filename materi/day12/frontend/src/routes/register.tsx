import { useRegister } from "@/modules/auth/hooks/useRegister";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerMutation = useRegister();

	return (
		<div className="h-screen flex justify-center items-center">
			<main className="w-[320px] p-4 space-y-6">
				<section className="text-center">
					<h3>Sign up</h3>
					<p>Create account to continue</p>
				</section>
				<section className="space-y-2">
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
					{/* <button type="button" onClick={handleRegister}>
						Register
					</button> */}
					<button
						disabled={registerMutation.isPending}
						type="button"
						onClick={() => registerMutation.mutate({ email, password })}
					>
						{registerMutation.isPending ? "Registering..." : "Register"}
					</button>
				</section>
			</main>
		</div>
	);
}
