import React from "react";

const caseStudies = [
  {
    id: "broker-portal",
    title: "Broker Portal",
    context: "Greenfield product, led development end-to-end",
    points: [
      "Built a new broker-facing portal from scratch, including dashboard, broker search and navigation.",
      "Designed and implemented role-based access control and permission enforcement so brokers only ever see their own data and views.",
      "Delivered features across the full stack — React components through to FastAPI endpoints, service logic and Pydantic models.",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "RBAC"],
  },
  {
    id: "payment-links",
    title: "Hosted Payment Links",
    context: "Security-sensitive payment infrastructure",
    points: [
      "Built and shipped a hosted payment links system, enabling secure payment flows from dashboard-generated links.",
      "Implemented the payment UX end-to-end: loading states, submission handling and integration with an external payment provider.",
      "Extended facility and ledger features with tranche-level actions — refunds, repayment adjustments and cancellations.",
    ],
    stack: ["React", "Python", "FastAPI", "Payments", "Ledger"],
  },
  {
    id: "open-banking",
    title: "Multi-Tenant Open Banking Journey",
    context: "White-labelled across 10+ client configurations",
    points: [
      "Contributed heavily to a white-labelled Open Banking journey used across multiple client brands.",
      "Implemented client-specific UI branding, configuration and feature variations from a single shared codebase.",
      "Worked across 10+ client configurations, keeping behaviour consistent while supporting custom per-tenant requirements.",
    ],
    stack: ["Angular", "TypeScript", "Tailwind", "Multi-tenant"],
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
          Full-stack engineer on a large fintech monorepo supporting multiple
          white-labelled clients and financial products. Work spans frontend,
          backend, APIs and configuration-driven multi-tenant architecture
          &mdash; 170+ tracked tickets delivered across four years, with a focus
          on incremental delivery, production stability and maintainable code.
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
