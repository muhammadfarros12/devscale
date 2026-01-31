import { api } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { json } from "stream/consumers";

interface RegisterSchema {
	email: string;
	password: string;
}

export const useRegister = () => {
	return useMutation({
		mutationKey: [],
		mutationFn: async ({ email, password }: RegisterSchema) => {
			const res = await api.post("auth/register", {
				json: {email, password}
			}).json()

			return res
		},
		onSuccess: () => {
			toast.success("registering success, please login");
		},
	});
};
