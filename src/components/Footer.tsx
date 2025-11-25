import { Login } from "./Login";
import { ModeToggle } from "./ThemeToggle";

export function Footer() {
	return (
		<footer className="space-y-2 py-4 flex flex-col items-center">
			<div className="space-x-2 flex justify-center">
				<ModeToggle />
				<Login />
			</div>
			<p>© {new Date().getFullYear()} Scooter Tracker. All rights reserved.</p>
		</footer>
	);
}
