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

export type Content = Experience | Project;
export type OptionalContent = Content | undefined;

export function isExperience(thing: OptionalContent): boolean {
	return thing && thing.hasOwnProperty("location");
}

export function isProject(thing: OptionalContent): boolean {
	return thing && thing.hasOwnProperty("link");
}
