import React from "react";
import Card from "./Card";
import Filter from "./Filter";

const Cards = ({ projects, filterProjects, categories }) => {
	return (
		<main id="projects" className="projects grid">
			<div className="title-box--sm">
				<h3 className="center fs-600 ff-sans-cond fw-700">My Other Projects</h3>
				<div className="underline--sm center"></div>
			</div>
			<Filter filterProjects={filterProjects} categories={categories} />
			<section className="cards-container grid">
				<Card projects={projects} />
			</section>
		</main>
	);
};

export default Cards;
