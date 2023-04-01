import type { Project } from "./types";
import type { Experience } from "./types";

const previewURLBase = "https://www.youtube-nocookie.com/embed/";

function getPreviewURL(videoID: string) {
	return previewURLBase + videoID;
}

export const allExperiences: Experience[] = [
	{
		title: "Software Engineer Intern",
		organization: "IMC",
		location: "Chicago, IL",
		date: "Jun - Aug 2022",
		description: [
			"Developed internal developer tools on the Internal Cloud team.",
			"Implemented features for Kubernetes cluster simulation tool and a JavaScript dashboard for monitoring results over time.",
		],
		technologies: "Golang, React, TypeScript, Docker, Kubernetes",
		imgSrc: "images/IMCLogo.png",
	},
	{
		title: "Application Development Intern",
		organization: "Florida Blue",
		location: "Remote",
		date: "May - Aug 2021",
		description: [
			"Created new features and report formats for the Enterprise Reporting Core Capabilities team.",
			"Designed data, regression, and component tests for the core dashboard.",
			"Fixed accessibility and contrast issues throughout the existing tool.",
		],
		technologies: "JavaScript, React, Express, MSSQL",
		imgSrc: "images/FBLogo.png",
	},
	{
		title: "Undergraduate Researcher, Team Lead",
		organization: "Wearable Engineering and Assistive Robotics (WEAR) Lab",
		location: "Orlando, FL",
		date: "Oct 2019 - Feb 2022",
		description: [
			"Project manager and software developer on the Wearable Feedback for Environmental Interpretation (WeFEI) project.",
			"Developed a wearable system to assist the visually impaired with important daily challenges.",
		],
		technologies: "Python, Ubuntu, Intel RealSense SDK",
		imgSrc: "images/WEARLogo.png",
	},
	{
		title: "President, Front End Team",
		organization: "Knight Hacks",
		location: "Orlando, FL",
		date: "May 2022 - Mar 2023",
		description: [
			"Oversaw all club operations, conducted and organized interviews for new team members, and coordinated meetings and check-ins each week.",
			"Facilitated planning and organization of events to help students grow technically and non-technically.",
			"Developed pages and implemented login for our Hackathon Admin Tool.",
		],
		technologies: "React, TypeScript, TailwindCSS, GraphQL",
		imgSrc: "images/KHLogo.jpg",
	},
	{
		title: "Vice President",
		organization: "Knight Hacks",
		location: "Orlando, FL",
		date: "Dec 2021 - May 2022",
		description: [
			"Assisted the President in all club operations and event organization.",
			"Organized and presented 5 technical workshops throughout the semester on popular JavaScript topics.",
		],
		imgSrc: "images/KHLogo.jpg",
	},
	{
		title: "Projects Director",
		organization: "Knight Hacks",
		location: "Orlando, FL",
		date: "Aug 2021 - May 2022",
		description: [
			"Coordinated, oversaw, and provided resources to 20+ teams creating software projects.",
			"Restructured the program format and requirements to increase participation over 500% and improve retention through the end of the semester.",
		],
		imgSrc: "images/KHLogo.jpg",
	},
];

export const allProjects: Project[] = [
	{
		title: "Bearmax",
		date: "Aug 2022 - Present",
		description: [
            "A companion robot for children with autism to facilitate social and emotional learning.",
            "Developed emotion learning game and assisted on all other software systems."
		],
		technologies: "Python, ROS2, TensorFlow, opencv-python, JavaScript, MERN Stack",
		link: "https://github.com/ElijahMSmith/Senior-Design-Emotion-Game",
		imgSrc: "images/BEARMAX.png",
	},
	{
		title: "Mobile Deck of Cards",
		date: "Jan - Apr 2022",
		description: [
			"Game server for a React Native app that allows any group of friends to connect and play card games using a simulated deck of cards.",
		],
		technologies:
			"TypeScript, Express.js, MongoDB Atlas, Socket.io, Mocha.js",
		link: "https://github.com/ElijahMSmith/DeckOfCards-BE",
		videoSrc: getPreviewURL("mxsNwl-X8tM"),
	},
	{
		title: "Daily Challenge Problem Bot",
		date: "Oct 2021 - Jan 2023",
		description: [
			"A Discord bot to pick and send out a daily easy, medium, and hard LeetCode problem for practice during interview seasons.",
		],
		technologies: "TypeScript, Discord.js, Google Cloud Functions",
		link: "https://github.com/ElijahMSmith/Daily-Challenge-Problem",
		imgSrc: "images/DCP.png",
	},
	{
		title: "Kronos",
		date: "Oct 2021",
		description: [
			"Desktop visualization tool for improving time management and event timeliness. Made at ShellHacks 2021.",
		],
		technologies: "Python, tkinter, Google Calendar API",
		link: "https://github.com/ElijahMSmith/Kronos",
		videoSrc: getPreviewURL("2jvEuN-SJQ4"),
	},
	{
		title: "Band Names",
		date: "Nov 2020 - Present",
		description: [
			"Passion project Chrome extension to suggest ridiculous names for your band to be used as usernames.",
			"Pick from real things said by those around me or generate a new verb + noun combination.",
		],
		technologies: "TypeScript, Chrome API",
		link: "https://github.com/ElijahMSmith/BandNames",
		imgSrc: "images/BandNames.png",
	},
	{
		title: "Othello",
		date: "Oct - Dec 2019",
		description: [
			"Desktop game to play the classic board game Othello against another player or one of three computer difficulties.",
		],
		technologies: "Java, Java Swing",
		link: "https://github.com/ElijahMSmith/Othello",
	},
];
