<script lang="ts">
	import Timeline from "./components/Timeline.svelte";
	import type { Project } from "./types";

	const allProjects: Project[] = [
		{
			title: "BEARMAX Emotion Recognition Game",
			date: "Aug 2022 - Present",
			description: [
				"Implemented a game for the BEARMAX robot to engage with its user in a game of portraying core emotions.",
				"One of many parts of my team's Senior Design project.",
			],
			technologies: "Python, ROS2, TensorFlow, opencv-python",
			link: "https://github.com/ElijahMSmith/Senior-Design-Emotion-Game",
		},
		{
			title: "Band Names",
			date: "Oct 2021 - Present",
			description: [
				"Passion project Chrome extension to suggest ridiculous names for your band to be used as usernames.",
				"Pick from real things said by those around me or generate a new verb + noun combination.",
			],
			technologies: "TypeScript, Chrome API",
			link: "https://github.com/ElijahMSmith/BandNames",
		},
		{
			title: "Mobile Deck of Cards",
			date: "Jan - Apr 2022",
			description: [
				"Passion project Chrome extension to suggest ridiculous names for your band to be used as usernames.",
				"Pick from real things said by those around me or generate a new verb + noun combination.",
			],
			technologies: "TypeScript, Chrome API",
			link: "https://github.com/ElijahMSmith/BandNames",
		},
	];
</script>

<section id="projects">
	<Timeline header="Projects" content={allProjects} />
</section>

<style lang="scss">
	section {
		display: block;
		margin-top: 0px;
	}
</style>
