import Button from "./ToggleButton";

import type { Theme } from "../types";

interface NavProps {
	toggleTheme: () => void;
	theme: Theme;
}

const Nav = ({ toggleTheme, theme }: NavProps) => {
	return (
		<nav id="nav" className="nav ">
			<div className="nav-box flex">
				<ul className="nav-list flex ff-sans-cond uppercase fs-300 fw-700 letter-spacing-4">
					<li className="nav-item">
						<a href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a href="#experience">Experience</a>
					</li>
					<li className="nav-item">
						<a href="#featured">Featured Projects</a>
					</li>
					<li className="nav-item">
						<a href="#projects">Earlier Projects</a>
					</li>
				</ul>
				<Button toggleTheme={toggleTheme} theme={theme} />
			</div>
		</nav>
	);
};

export default Nav;
