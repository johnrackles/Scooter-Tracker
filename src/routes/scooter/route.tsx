import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/scooter")({
	component: RouteComponent,
	loader: () => ({ crumb: "Scooter" }),
});

function RouteComponent() {
	return <Outlet />;
}
