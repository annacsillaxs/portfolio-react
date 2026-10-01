import { useState } from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import type { Project } from "../types";

interface FeaturedProps {
	projects: Project[];
}

const Featured = ({ projects }: FeaturedProps) => {
	const [index, setIndex] = useState(0);

	const featuredProjects = projects.filter((detail) => detail.featured);

	const count = featuredProjects.length;
	const showPrevious = () => setIndex((current) => (current - 1 + count) % count);
	const showNext = () => setIndex((current) => (current + 1) % count);

	return (
		<section id="featured" className="featured grid">
			<div className="title-box">
				<h2 className="center fs-600 ff-sans-cond fw-700">Featured Personal Projects</h2>
				<div className="underline center"></div>
				<p className="center projects-intro">Side projects I built in my own time to explore new ideas and techniques.</p>
			</div>

			<div className="arrows-box">
				<MdOutlineArrowBackIos className="react-icons carousel-icon--left" onClick={showPrevious} />
				<MdOutlineArrowForwardIos className="react-icons carousel-icon--right" onClick={showNext} />
			</div>

			{featuredProjects.map((project, projectIndex) => {
				const { id, link, source, type, img, title, tags, repo, desc } = project;

				let position = "";

				if (projectIndex === index) {
					position = "activeSlide";
				}

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
