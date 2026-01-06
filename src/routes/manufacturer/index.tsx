import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/manufacturer/")({
	component: RouteComponent,
	async loader() {
		return { crumb: "Manufacturer" };
	},
});

function RouteComponent() {
	return <div>Hello "/manufacturer/"!</div>;
}
