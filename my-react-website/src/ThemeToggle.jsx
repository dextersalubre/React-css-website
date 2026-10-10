import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toLight = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={toLight ? "Switch to light theme" : "Switch to dark theme"}
      className="rounded-lg border border-line px-3 py-1 text-sm transition-colors hover:border-accent hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {toLight ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggle;