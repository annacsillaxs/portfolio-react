import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import data from "./data";
import type { Theme } from "./types";

const filteredCategories = ["all", ...new Set(data.flatMap((project) => project.tags))];

function App() {
	const [theme, setTheme] = useState<Theme>("light-theme");
	const [filteredProjects, setFilteredProjects] = useState(data);

	const toggleTheme = () => {
		setTheme((current) => (current === "light-theme" ? "dark-theme" : "light-theme"));
	};

	const filterProjects = (category: string) => {
		if (category === "all") {
			setFilteredProjects(data);
			return;
		}
		const newProjects = data.filter((project) => project.tags.includes(category));
		setFilteredProjects(newProjects);
	};

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

	return (
		<>
			<Nav toggleTheme={toggleTheme} theme={theme} />
			<div className="app container grid" id="home">
				<Header theme={theme} />
				<Experience />
				<Featured projects={data} />
				<Cards projects={filteredProjects} filterProjects={filterProjects} categories={filteredCategories} totalProjects={data.length} />
			</div>
			<Footer />
		</>
	);
}

export default App;
