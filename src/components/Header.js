import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";

const Header = ({ toggleTheme, theme }) => {
	const skills = [
		{
			name: "html",
			level: "95",
		},
		{
			name: "css/sass",
			level: "95",
		},
		{
			name: "js6",
			level: "90",
		},
		{
			name: "react js",
			level: "60",
		},
		{
			name: "mern",
			level: "25",
		},
	];

	return (
		<header id="header" className="header grid">
			<picture className="profile-img">
				<source srcSet="./images/profile2.jpg" type="image/jpg" />
				<img src="./images/profile2.jpg" alt="Anna Seregi" />
			</picture>
			<div className="icons-box grid">
				<div className="about-box flex">
					<h1 className="ff-sans-cond uppercase fs-600 fw-700 ">Anna Seregi</h1>
					<h3 className="ff-sans-cond fs-400 text-lighter">Front End Developer</h3>
					<p>
						<BiMap className="react-icons--map" />
						London, UK
					</p>
				</div>
				<div className="social-box flex">
					<a href="https://www.linkedin.com/in/anna-csilla-seregi-513003118/" target="_blank" rel="noopener noreferrer" className="tooltip">
						<FaLinkedin className="react-icons linkedin tooltip" />
						<span className="tooltip-text ff-sans-cond fw-700 fs-200">LinkedIn</span>
					</a>
					<a href="https://github.com/annacsillaxs" target="_blank" rel="noopener noreferrer" className="tooltip">
						<FaGithub className={`${theme === "light-theme" ? "" : "dark"} react-icons github`} />
						<span className="tooltip-text ff-sans-cond fw-700 fs-200">Github</span>
					</a>
					<a href="https://www.frontendmentor.io/profile/annacsillaxs" target="_blank" rel="noopener noreferrer" className="tooltip">
						<picture className="fm-img">
							<source srcSet="./images/fm-logo.svg" type="image/svg" />
							<img src="./images/fm-logo.svg" alt="Frontend Mentor" />
						</picture>
						<span className="tooltip-text ff-sans-cond fw-700 fs-200">Frontend Mentor</span>
					</a>
				</div>
				<div className="contact-box flex">
					<a href="mailto:anna.seregi@gmail.com" target="_blank" rel="noopener noreferrer" className="tooltip">
						<HiMail className="react-icons" />
						<span className="tooltip-text ff-sans-cond fw-700 fs-200">Email Me</span>
					</a>
					<a href="tel:0036 1 1234 5678" className="tooltip">
						<HiPhone className="react-icons" />
						<span className="tooltip-text ff-sans-cond fw-700 fs-200">Call Me</span>
					</a>
					<a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="tooltip">
						<MdOutlineContactPage className="react-icons" />
						<span className="tooltip-text ff-sans-cond fw-700 fs-200">My CV</span>
					</a>
				</div>
			</div>
			<section className="about flow">
				<h3 className="ff-sans-cond fs-400 fw-700 text-lighter">About me</h3>
				<p>
					Hi, I'm Anna. I've learnt the front end basics (HTML, CSS and JS) from{" "}
					<a href="https://www.traversymedia.com/" target="_blank" rel="noopener noreferrer">
						Brad Traversy
					</a>
					,{" "}
					<a href="https://codingheroes.io/" target="_blank" rel="noopener noreferrer">
						Jonas Schmedtmann
					</a>
					,
					<a href="https://academind.com/" target="_blank" rel="noopener noreferrer">
						Maximilian Schwarzmüller
					</a>
					and{" "}
					<a href="https://www.kevinpowell.co/" target="_blank" rel="noopener noreferrer">
						Kevin Powell
					</a>
					. React from{" "}
					<a href="https://www.johnsmilga.com/" target="_blank" rel="noopener noreferrer">
						John Smilga
					</a>
					. I've just started my MERN stack journey.
				</p>
				<p>Please check out my projects below and don't hesitate to contact me. I am open to work.</p>
			</section>

			<section className="skills flow">
				<div className="skills-box flow">
					<h3 className="ff-sans-cond fs-400 fw-700 text-lighter">Skills</h3>
					<div className="progress-container grid">
						{skills.map((skill, index) => {
							return (
								<div className="progress flex" key={index}>
									<p className="uppercase fw-400">{skill.name}</p>
									<div className="progress-bar-bg">
										<div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
