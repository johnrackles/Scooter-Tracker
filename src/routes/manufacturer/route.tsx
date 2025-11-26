import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/manufacturer")({
	component: RouteComponent,
	loader: () => ({ crumb: "manufacturer" }),
});

function RouteComponent() {
	return <Outlet />;
}
