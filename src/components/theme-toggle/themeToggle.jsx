import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import x from "./themeToggle.module.scss";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={x.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className={x.thumb}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  );
};