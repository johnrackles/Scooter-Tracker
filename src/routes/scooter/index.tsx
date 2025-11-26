import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUserID } from "@/lib/auth-server-func";

export const Route = createFileRoute("/scooter/")({
	component: RouteComponent,
	async beforeLoad() {
		const userID = await getUserID();

		return { userID };
	},
	async loader({ context }) {
		if (!context.userID) {
			throw redirect({ to: "/" });
		}
		return { userID: context.userID };
	},
});

function RouteComponent() {
	const { userID } = Route.useLoaderData();

	return <div>Hello {userID}</div>;
}
