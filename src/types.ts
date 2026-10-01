export type Theme = "light-theme" | "dark-theme";

export interface Project {
	id: string;
	name: string;
	title: string;
	featured?: boolean;
	link: string;
	source: string;
	type: string;
	img: string;
	tags: string[];
	repo: string;
	desc: string;
	links?: string[];
	href?: string[];
}
