import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import type { Theme } from "../types";

interface HeaderProps {
  theme: Theme;
}

const Header = ({ theme }: HeaderProps) => {
  const skillGroups = [
    {
      group: "Frontend",
      items: [
        "React",
        "Angular",
        "TypeScript",
        "RxJS",
        "Tailwind CSS",
        "Storybook",
        "AG Grid",
        "Angular Material",
        "Figma",
      ],
    },
    {
      group: "Backend",
      items: ["Python", "FastAPI", "REST APIs", "Pydantic"],
    },
    {
      group: "Data",
      items: ["PostgreSQL", "SQL"],
    },
    {
      group: "Architecture",
      items: ["Monorepos", "Multi-tenant platforms", "RBAC", "API integration"],
    },
    {
      group: "Tools & Infrastructure",
      items: ["Git", "Docker", "CI/CD", "OpenTelemetry"],
    },
    {
      group: "Testing",
      items: ["Pytest", "Unit testing", "Integration testing"],
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
          <h1 className="ff-sans-cond uppercase fs-600 fw-700 ">
            Anna Csilla Kun-Seregi
          </h1>
          <h3 className="ff-sans-cond fs-400 text-lighter">
            Software Engineer
          </h3>
          <p className="tagline">
            Frontend-focused &bull; React &bull; TypeScript &bull; Angular
            &bull; <span className="nowrap">Tailwind CSS</span> &bull; Fintech
          </p>
          <p>
            <BiMap className="react-icons--map" />
            London, UK
          </p>
        </div>
        <div className="social-box flex">
          <a
            href="https://www.linkedin.com/in/anna-csilla-kun-seregi-513003118/"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <FaLinkedin className="react-icons linkedin tooltip" />
            <span className="tooltip-text ff-sans-cond fw-700 fs-200">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/annacsillaxs"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <FaGithub
              className={`${
                theme === "light-theme" ? "" : "dark"
              } react-icons github`}
            />
            <span className="tooltip-text ff-sans-cond fw-700 fs-200">
              Github
            </span>
          </a>
          <a
            href="https://www.frontendmentor.io/profile/annacsillaxs"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <picture className="fm-img">
              <source srcSet="./images/fm-logo.svg" type="image/svg" />
              <img src="./images/fm-logo.svg" alt="Frontend Mentor" />
            </picture>
            <span className="tooltip-text ff-sans-cond fw-700 fs-200">
              Frontend Mentor
            </span>
          </a>
        </div>
        <div className="contact-box flex">
          <a
            href="mailto:anna.seregi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <HiMail className="react-icons" />
            <span className="tooltip-text ff-sans-cond fw-700 fs-200">
              Email Me
            </span>
          </a>
          <a href="tel:0044 7456 334 777" className="tooltip">
            <HiPhone className="react-icons" />
            <span className="tooltip-text ff-sans-cond fw-700 fs-200">
              Call Me
            </span>
          </a>
          <a
            href="/Anna_Kun-Seregi_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <MdOutlineContactPage className="react-icons" />
            <span className="tooltip-text ff-sans-cond fw-700 fs-200">
              My CV
            </span>
          </a>
        </div>
      </div>
      <section className="about flow">
        <h3 className="ff-sans-cond fs-400 fw-700 text-lighter">About me</h3>
        <p>
          Hi, I'm Anna &mdash; a Software Engineer with 4+ years of experience
          building production fintech applications within a large multi-tenant
          platform.
        </p>
        <p>
          I have a strong frontend engineering background with TypeScript,
          Angular and React, alongside hands-on experience integrating frontend
          applications with Python/FastAPI backend services. I've built
          production interfaces and end-to-end features involving
          authentication, RBAC, payments, financial workflows and
          configuration-driven multi-tenant platforms.
        </p>
        <p>
          I'm comfortable across the full development lifecycle, from technical
          design and implementation through testing, code review and production
          delivery.
        </p>
        <p>Have a look at my work below and don't hesitate to get in touch.</p>
      </section>

      <section className="skills flow">
        <div className="skills-box flow">
          <h3 className="ff-sans-cond fs-400 fw-700 text-lighter">
            Technical Skills
          </h3>
          <div className="skill-groups grid">
            {skillGroups.map((skillGroup) => {
              return (
                <div className="skill-group" key={skillGroup.group}>
                  <h4 className="ff-sans-cond uppercase fs-300 fw-700 letter-spacing-4 text-lighter">
                    {skillGroup.group}
                  </h4>
                  <ul className="skill-list flex">
                    {skillGroup.items.map((item) => {
                      return (
                        <li className="skill-tag fs-200 fw-400" key={item}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
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
