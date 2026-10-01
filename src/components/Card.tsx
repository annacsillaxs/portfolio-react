import { BiGitRepoForked } from "react-icons/bi";

import type { Project } from "../types";

interface CardProps {
	projects: Project[];
}

const Card = ({ projects }: CardProps) => {
	return (
		<>
			{projects.map((project) => {
				const { id, link, source, type, img, title, tags, repo, desc, links, href } = project;

				return (
					<article className="card" key={id}>
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
							<p>{desc}</p>
							{links
								? links.map((link, index) => {
										return (
											<a href={link} target="_blank" rel="noopener noreferrer" key={index} className="fs-200 fw-400 text-lighter">
												{href?.[index]}
											</a>
										);
								  })
								: null}
						</div>
					</article>
				);
			})}
		</>
	);
};

export default Card;
