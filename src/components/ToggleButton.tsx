import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import type { Theme } from "../types";

interface ToggleButtonProps {
	toggleTheme: () => void;
	theme: Theme;
}

const Button = ({ toggleTheme, theme }: ToggleButtonProps) => {
	return (
		<button type="button" className={`${theme === "light-theme" ? "light" : "dark"} btn `} onClick={toggleTheme}>
			<MdOutlineDarkMode className="react-icons--moon" />
			<MdOutlineLightMode className="react-icons--sun" />
			<span className={`${theme === "dark-theme" ? "dark" : ""} circle`}></span>
		</button>
	);
};

export default Button;
