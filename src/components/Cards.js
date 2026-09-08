import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

const Cards = ({ projects, filterProjects, categories, totalProjects }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main id="projects" className="projects grid">
			<div className="title-box--sm">
				<h3 className="center fs-600 ff-sans-cond fw-700">Earlier Practice Projects</h3>
				<div className="underline--sm center"></div>
			</div>

			<p className="center projects-intro">
				Self-directed builds from when I was teaching myself frontend development &mdash; Frontend Mentor challenges, JavaScript exercises and UI experiments. Kept here as
				a record of where I started.
			</p>

			<div className="center">
				<button type="button" className="disclosure-btn uppercase fs-300 fw-700 letter-spacing-4" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
					{isOpen ? "Hide" : "Show"} {totalProjects} projects
				</button>
			</div>

			{isOpen && (
				<>
					<Filter filterProjects={filterProjects} categories={categories} />
					<section className="cards-container grid">
						<Card projects={projects} />
					</section>
				</>
			)}
		</main>
	);
};

export default Cards;
