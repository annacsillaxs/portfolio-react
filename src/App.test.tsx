import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import data from "./data";

describe("App", () => {
	it("renders the name and main sections", () => {
		render(<App />);

		expect(screen.getByRole("heading", { level: 1, name: /anna csilla kun-seregi/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /professional experience/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: /featured personal projects/i })).toBeInTheDocument();
	});

	it("toggles between light and dark theme", async () => {
		const user = userEvent.setup();
		const { container } = render(<App />);
		expect(document.documentElement).toHaveClass("light-theme");

		const toggle = container.querySelector<HTMLButtonElement>("nav button")!;
		await user.click(toggle);
		expect(document.documentElement).toHaveClass("dark-theme");

		await user.click(toggle);
		expect(document.documentElement).toHaveClass("light-theme");
	});
});

describe("Earlier practice projects", () => {
	const projectsSection = () => document.getElementById("projects")!;
	const cardCount = () => projectsSection().querySelectorAll("article.card").length;

	it("is collapsed until the disclosure button is pressed", async () => {
		const user = userEvent.setup();
		render(<App />);

		const disclosure = screen.getByRole("button", { name: `Show ${data.length} projects` });
		expect(disclosure).toHaveAttribute("aria-expanded", "false");
		expect(cardCount()).toBe(0);

		await user.click(disclosure);

		expect(disclosure).toHaveAttribute("aria-expanded", "true");
		expect(disclosure).toHaveTextContent(`Hide ${data.length} projects`);
		expect(cardCount()).toBe(data.length);
	});

	it("filters projects by tag", async () => {
		const user = userEvent.setup();
		render(<App />);
		await user.click(screen.getByRole("button", { name: /show \d+ projects/i }));

		const filters = within(projectsSection());
		await user.click(filters.getByRole("button", { name: "react" }));

		const reactProjects = data.filter((project) => project.tags.includes("react"));
		expect(reactProjects.length).toBeGreaterThan(0);
		expect(cardCount()).toBe(reactProjects.length);
		for (const project of reactProjects) {
			expect(filters.getByRole("heading", { name: project.title })).toBeInTheDocument();
		}

		await user.click(filters.getByRole("button", { name: "all" }));
		expect(cardCount()).toBe(data.length);
	});
});
