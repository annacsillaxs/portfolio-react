import React from "react";
import Button from "./ToggleButton";

const Nav = ({ toggleTheme, theme }) => {
	return (
		<nav id="nav" className="nav flex">
			<ul className="nav-list flex ff-sans-cond uppercase fs-300 fw-700 letter-spacing-4">
				<li className="nav-item">
					<a href="#home">Home</a>
				</li>
				<li className="nav-item">
					<a href="#featured">Featured Projects</a>
				</li>
				<li className="nav-item">
					<a href="#projects">Other Projects</a>
				</li>
			</ul>
			<Button toggleTheme={toggleTheme} theme={theme} />
		</nav>
	);
};

export default Nav;
