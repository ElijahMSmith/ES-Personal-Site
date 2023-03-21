export interface Experience {
	title: string;
	location: string;
	organization: string;
	date: string;
	description: string[];
	technologies?: string;
	imgSrc?: string;
}

export interface Project {
	title: string;
	date: string;
	technologies: string;
	description: string[];
	link: string;
	imgSrc?: string;
}

export function isExperience(thing: Experience | Project): boolean {
	return thing.hasOwnProperty("location");
}
