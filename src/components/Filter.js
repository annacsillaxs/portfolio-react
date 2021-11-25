import React from "react";

const Filter = ({ filterProjects, categories }) => {
	return (
		<div className="flex filter-container">
			<h4 className="fs-500 uppercase ff-sans-cond text-lighter">Filter by language</h4>
			<div className="btn-container flex">
				{categories.map((category, index) => {
					return (
						<button type="button" className={`filter-btn uppercase fs-300 fw-700 letter-spacing-4 tag--${category}`} key={index} onClick={() => filterProjects(category)}>
							{category}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Filter;
