import { SiGithub } from "@icons-pack/react-simple-icons";
import { signIn, signOut, useSession } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

export function Login() {
	const { isPending, refetch, data } = useSession();

	const handleSignIn = async () => {
		await signIn.social({
			provider: "github",
		});
	};

	const handleSignOut = async () => {
		await signOut();
		await refetch();
	};

	return data?.user ? (
		<Button
			onClick={handleSignOut}
			type="button"
			disabled={isPending}
			variant="outline"
		>
			{isPending && <Spinner />} Sign Out
		</Button>
	) : (
		<Button onClick={handleSignIn} type="button" disabled={isPending}>
			{isPending ? <Spinner /> : <SiGithub />} Sign In
		</Button>
	);
}
