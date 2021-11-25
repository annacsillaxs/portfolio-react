import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import data from "./data";
// import paginate from "./utils";

let allCategories = [];

data.map((category) => category.tags.map((cat) => allCategories.push(cat)));

const filteredCategories = ["all", ...new Set(allCategories)];

function App() {
	const [theme, setTheme] = useState("light-theme");
	const [projects, setProjects] = useState(data);
	const [filteredProjects, setFilteredProjects] = useState(data);
	const [categories, setCategories] = useState(filteredCategories);

	const toggleTheme = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
		console.log("clicked");
	};

	const filterProjects = (category) => {
		if (category === "all") {
			setFilteredProjects(data);
			return;
		}
		const newProjects = data.filter((project) => project.tags.includes(category));
		setFilteredProjects(newProjects);
	};

	useEffect(() => {
		document.documentElement.className = theme;
		setProjects(data);
	}, [theme, data]);

	return (
		<>
			<Nav toggleTheme={toggleTheme} theme={theme} />
			<div className="app container grid" id="home">
				<Header toggleTheme={toggleTheme} theme={theme} />
				<Featured projects={projects} />
				<Cards projects={filteredProjects} filterProjects={filterProjects} categories={categories} />
			</div>
			<Footer />
		</>
	);
}

export default App;
