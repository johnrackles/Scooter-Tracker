import { isMatch, useMatches } from "@tanstack/react-router";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./ui/breadcrumb";

export function Breadcrumbs() {
	const matches = useMatches();
	const matchesWithCrumbs = matches
		.filter((match) => isMatch(match, "loaderData.crumb"))
		.map((match) => ({
			to: match.pathname,
			label: match.loaderData!.crumb,
		}));

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{matchesWithCrumbs.map((match, index) => (
					<>
						<BreadcrumbItem key={match.to}>
							{index < matchesWithCrumbs.length - 1 ? (
								<BreadcrumbLink href={match.to}>{match.label}</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{match.label}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{index < matchesWithCrumbs.length - 1 && <BreadcrumbSeparator />}
					</>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
