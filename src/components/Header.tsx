import { Link } from "@tanstack/react-router";

export function Header() {
	return (
		<header className="p-4 border-b md:space-y-4 flex justify-center md:justify-start">
			<Link to="/" className="mb-0">
				<h1 className="text-2xl font-bold md:mx-2 md:my-0">Scooter Tracker</h1>
			</Link>
		</header>
	);
}
