import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/scooter/$id")({
	component: RouteComponent,
	loader({ params }) {
		return { crumb: `Scooter ${params.id}` };
	},
});

function RouteComponent() {
	const { id } = Route.useParams();
	return <div>Hello "/scooter/{id}"! </div>;
}
