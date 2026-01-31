import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import toast from "react-hot-toast";

export const Route = createFileRoute("/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerMutation = useMutation({
		mutationKey: [],
		mutationFn: async () => {
			const res = await fetch("http://localhost:8000/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			return data;
		},
        onSettled: () => {
            toast.success('registering success, please login')
        }
	});

	// async function handleRegister() {
	// 	console.log(email, password);
	//     // mutation: membuat/mengupdate data
	//     const res = await fetch("http://localhost:8000/auth/register", {
	//         method: 'POST',
	//         headers: {
	//             'Content-Type': "application/json"
	//         },
	//         body: JSON.stringify({ email, password })
	//     })
	//     const data = await res.json()
	//     console.log(data)
	// }

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
						onClick={() => registerMutation.mutate()}
					>
						{registerMutation.isPending ? "Registering..." : "Register"}
					</button>
				</section>
			</main>
		</div>
	);
}
