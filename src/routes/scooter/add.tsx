import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scooter/add")({
	component: RouteComponent,
	loader: () => ({ crumb: "Add" }),
});

function RouteComponent() {
	return <div>Hello "/dashboard/scooter/add"!</div>;
}
