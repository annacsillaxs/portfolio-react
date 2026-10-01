
const caseStudies = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    context: "Production apps across a large multi-tenant codebase",
    points: [
      "Built and maintained production applications in TypeScript, Angular and React — complex forms, dashboards, data-heavy interfaces and API-driven workflows.",
      "Developed reusable UI components and features with Tailwind CSS, Storybook, AG Grid and Angular Material.",
      "Contributed to frontend architecture, refactoring and performance improvements.",
    ],
    stack: ["Angular", "React", "TypeScript", "Tailwind", "Storybook", "AG Grid"],
  },
  {
    id: "broker-portal",
    title: "Greenfield Broker Portal",
    context: "New product, led development from the ground up",
    points: [
      "Led development of a new Broker Portal, including dashboard, broker search and navigation.",
      "Built frontend workflows in TypeScript and integrated them with Python/FastAPI backend services.",
      "Implemented RBAC and permission enforcement so users only access appropriate data and functionality.",
    ],
    stack: ["TypeScript", "Python", "FastAPI", "RBAC"],
  },
  {
    id: "payments",
    title: "Payments & Financial Workflows",
    context: "Security-sensitive payment and ledger flows",
    points: [
      "Built and shipped a hosted payment-links system, from dashboard-generated links through to external payment-provider integration.",
      "Implemented payment UX: form handling, submission and loading states, validation and error handling.",
      "Developed workflows for repayments, refunds, cancellations and facility actions.",
    ],
    stack: ["TypeScript", "Payments", "Ledger"],
  },
  {
    id: "open-banking",
    title: "Multi-Tenant Platform",
    context: "White-labelled across 10+ client configurations",
    points: [
      "Contributed heavily to a white-labelled Open Banking journey used across multiple client brands.",
      "Implemented client-specific branding, configuration and feature variations within a shared codebase.",
      "Balanced reusable functionality with tenant-specific requirements across 10+ client configurations.",
    ],
    stack: ["Angular", "TypeScript", "Tailwind", "Multi-tenant"],
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    context: "Ownership of end-to-end production features",
    points: [
      "Built and extended Python/FastAPI services, REST endpoints, service logic and Pydantic models.",
      "Worked with authentication, session handling and backend RBAC enforcement.",
      "Wrote and maintained unit and integration tests with Pytest, and diagnosed production issues across every layer.",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "Pytest"],
  },
  {
    id: "end-to-end",
    title: "Selected End-to-End Features",
    context: "Delivered across frontend, backend and tests",
    points: [
      "Facility Notes — backend models, APIs and service logic in FastAPI, matching Angular components, and automated tests.",
      "Self-Declared Income — frontend form workflows, full frontend-to-backend integration, API migration and validation.",
      "Premium Finance & Facility Actions — repayment changes, BNPL cancellations and ledger operations, front to back.",
    ],
    stack: ["Angular", "Python", "FastAPI", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="title-box--sm">
        <h2 className="center fs-600 ff-sans-cond fw-700">
          Professional Experience
        </h2>
        <div className="underline--sm center"></div>
      </div>

      <div className="role flow">
        <div className="role-header flex">
          <h3 className="ff-sans-cond fs-500 fw-700">
            Software Engineer &mdash; Abound
          </h3>
          <p className="ff-sans-cond uppercase fs-300 fw-700 letter-spacing-4 text-lighter">
            Mar 2022 &ndash; Jun 2026
          </p>
        </div>
        <p>
          Software Engineer on a large fintech monorepo supporting multiple
          white-labelled clients and financial products. Worked primarily
          across frontend engineering while progressively taking ownership of
          full-stack features spanning UI, APIs, business logic and
          configuration.
        </p>
      </div>

      <div className="case-studies grid">
        {caseStudies.map((caseStudy) => {
          const { id, title, context, points, stack } = caseStudy;

          return (
            <article className="case-study flow" key={id}>
              <header>
                <h4 className="ff-sans-cond fs-500 text-lighter">{title}</h4>
                <p className="case-study__context fs-200">{context}</p>
              </header>
              <ul className="case-study__points flow">
                {points.map((point, index) => {
                  return (
                    <li className="fs-200" key={index}>
                      {point}
                    </li>
                  );
                })}
              </ul>
              <ul className="skill-list flex">
                {stack.map((item) => {
                  return (
                    <li className="skill-tag fs-200 fw-400" key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
