import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/scooter/")({
	component: RouteComponent,
	async loader({ context }) {
		if (!context.userID) {
			throw redirect({ to: "/" });
		}
		return { userID: context.userID, crumb: "Scooter" };
	},
});

function RouteComponent() {
	const { userID } = Route.useLoaderData();

	return <div>Hello {userID}</div>;
}
