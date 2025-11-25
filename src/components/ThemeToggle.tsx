import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<Button
			onClick={toggleTheme}
			aria-label="Toggle theme"
			type="button"
			variant="outline"
		>
			{theme === "dark" ? <Moon /> : <Sun />}
		</Button>
	);
}
