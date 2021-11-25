import React, { useState, useEffect } from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const Featured = ({ projects }) => {
	const [index, setIndex] = useState(0);

	const featuredProjects = projects.filter((detail) => detail.featured);

	useEffect(() => {
		const prevIndex = featuredProjects.length - 1;

		if (index < 0) {
			setIndex(prevIndex);
		}
		if (index > featuredProjects.length - 1) {
			setIndex(0);
		}
	}, [index, projects]);

	return (
		// <section className="featured cards-container grid">
		<section id="featured" className="featured grid">
			<div className="title-box">
				<h2 className="center fs-600 ff-sans-cond fw-700">My Featured Projects</h2>
				<div className="underline center"></div>
			</div>

			<div className="arrows-box">
				<MdOutlineArrowBackIos className="react-icons carousel-icon--left" onClick={() => setIndex(index - 1)} />
				<MdOutlineArrowForwardIos className="react-icons carousel-icon--right" onClick={() => setIndex(index + 1)} />
			</div>

			{featuredProjects.map((project, projectIndex) => {
				const { id, link, source, type, img, title, tags, repo, desc } = project;

				let position = "";

				if (projectIndex === index) {
					position = "activeSlide";
				}
				// if (projectIndex === index - 1 || (index === 0 && projectIndex === featuredProjects.length - 1)) {
				// 	position = "leftSlide";
				// }
				if (projectIndex === index - 1 || (index === 0 && projectIndex === featuredProjects.length - 1)) {
					position = "leftSlide";
				}

				if (projectIndex === index + 1 || (index === featuredProjects.length - 1 && projectIndex === 0)) {
					position = "rightSlide";
				}

				return (
					<article className={`${position} ${id} card--featured`} key={id}>
						<div className="img-container">
							<a href={link} target="_blank" rel="noopener noreferrer">
								<picture>
									<source srcSet={source} type={type} />
									<img src={img} alt={title} />
								</picture>
							</a>
						</div>
						<div className="content-container">
							<header>
								<h2 className="fs-500 ff-sans-cond text-lighter">{title}</h2>
								<div className="flex tags-container">
									<div className="flex">
										{tags.map((tag, index) => {
											return (
												<p key={index} className={`ff-sans-normal uppercase fs-300 fw-700 letter-spacing-4 tag--${tag}`}>
													{tag}
												</p>
											);
										})}
									</div>
									<a href={repo} target="_blank" rel="noopener noreferrer">
										<BiGitRepoForked className="react-icons--small" />
									</a>
								</div>
							</header>
							{position === "activeSlide" && <p>{desc}</p>}
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Featured;
