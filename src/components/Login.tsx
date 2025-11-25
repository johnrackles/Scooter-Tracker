import { SiGithub } from "@icons-pack/react-simple-icons";
import { createAuthClient } from "better-auth/client";
import { createAuthClient as reactClient } from "better-auth/react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

const authClient = createAuthClient();
const { useSession } = reactClient();

export function Login() {
	const { data: session, isPending, refetch } = useSession();

	const signIn = async () => {
		await authClient.signIn.social({
			provider: "github",
		});
	};

	const signOut = async () => {
		await authClient.signOut();
		await refetch();
	};

	return session?.user ? (
		<Button
			onClick={signOut}
			type="button"
			disabled={isPending}
			variant="outline"
		>
			{isPending && <Spinner />} Sign Out
		</Button>
	) : (
		<Button onClick={signIn} type="button" disabled={isPending}>
			{isPending ? <Spinner /> : <SiGithub />} Sign In
		</Button>
	);
}
