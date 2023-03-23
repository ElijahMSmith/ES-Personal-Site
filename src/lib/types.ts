export interface Experience extends Content {
	location: string;
	organization: string;
	technologies?: string;
}

export interface Project extends Content {
	technologies: string;
	link: string;
}

export interface Content {
	title: string;
	date: string;
	description: string[];
	imgSrc?: string;
	videoSrc?: string;
}

export type OptionalContent = Content | undefined;

export function isExperience(thing: OptionalContent): boolean {
	return thing && thing.hasOwnProperty("location");
}

export function isProject(thing: OptionalContent): boolean {
	return thing && thing.hasOwnProperty("link");
}
