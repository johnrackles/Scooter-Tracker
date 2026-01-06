import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getUserID } from "@/lib/auth-server-func";

export const Route = createFileRoute("/manufacturer")({
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
	return <Outlet />;
}
