import type { Project } from "./types";
import type { Experience } from "./types";

const previewURLBase = "https://www.youtube-nocookie.com/embed/";

function getPreviewURL(videoID: string) {
	return previewURLBase + videoID;
}

export const allExperiences: Experience[] = [
	{
		title: "Software Engineer - Platform Engineering",
		organization: "IMC",
		location: "Chicago, IL",
		date: "Aug 2023 - Present",
		description: [
			"Building next-generation internal tooling for deploying and operating applications.",
		],
		technologies: "Go, Python, Linux, Docker, Kubernetes, TeamCity, GoCD",
		imgSrc: "images/IMCLogo.png",
	},
	{
		title: "Software Engineer Intern",
		organization: "IMC",
		location: "Chicago, IL",
		date: "Jun - Aug 2022",
		description: [
			"Implemented a Kubernetes cluster scheduling simulator and a JavaScript dashboard for monitoring performance over time.",
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
		organization: "Wearable Engineering and Assistive Robotics Lab",
		location: "Orlando, FL",
		date: "Oct 2019 - Feb 2022",
		description: [
			"Project manager and software developer on the Wearable Feedback for Environmental Interpretation (WeFEI) project.",
			"Developed a wearable system to assist the visually impaired with important daily challenges.",
		],
		technologies: "Python, Ubuntu, Intel RealSense SDK",
		imgSrc: "images/WEARLogo.png",
	},
];

export const allProjects: Project[] = [
	{
		title: "Bearmax",
		date: "Aug 2022 - April 2023",
		description: [
			"A companion robot for children with autism to facilitate social and emotional learning.",
			"Developed emotion learning game and assisted on all other software systems.",
		],
		technologies:
			"Python, ROS2, TensorFlow, opencv-python, JavaScript, MERN Stack",
		link: "https://github.com/ElijahMSmith/Senior-Design-Emotion-Game",
		videoSrc: getPreviewURL("euNmx8sbuYU"),
	},
	{
		title: "Vocabulary Trainer App",
		date: "May 2023 - Present",
		description: [
			"A vocabulary repetition tool for long-term memorization that works on your schedule.",
			"Create your own repetition frequency or practice any time.",
		],
		technologies: "Dart, Flutter, SQLite",
		link: "https://github.com/ElijahMSmith/Vocabulary-Trainer-App",
		imgSrc: "images/vocabApp.png",
	},
	{
		title: "Mobile Deck of Cards",
		date: "Jan - Apr 2022",
		description: [
			"React Native app to let groups play any card game, any time, anywhere.",
			"Developed the game server for handing game actions and authentication.",
		],
		technologies: "TypeScript, Express.js, MongoDB Atlas, Socket.io, Mocha.js",
		link: "https://github.com/ElijahMSmith/DeckOfCards-BE",
		videoSrc: getPreviewURL("mxsNwl-X8tM"),
	},
	{
		title: "Daily Challenge Problem Bot",
		date: "Oct 2021 - Jan 2023",
		description: [
			"A Discord bot to post the daily LeetCode challenge to your server.",
			"Designed to encourage comradery during university-level interview season.",
		],
		technologies: "TypeScript, Discord.js, Google Cloud Functions",
		link: "https://github.com/ElijahMSmith/Daily-Challenge-Problem",
		imgSrc: "images/DCP.png",
	},
	{
		title: "Kronos",
		date: "Oct 2021",
		description: [
			"Desktop visualization tool for improving time management and event timeliness.",
			"Developed at ShellHacks 2021.",
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
			"Graphical desktop implementation of the classic board game Othello (Reversi).",
			"Challenge your friends or any of three levels of AI.",
		],
		technologies: "Java, Java Swing",
		link: "https://github.com/ElijahMSmith/Othello",
		imgSrc: "images/Othello.png",
	},
];
