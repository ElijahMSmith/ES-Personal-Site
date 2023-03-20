<script lang="ts">
	import gsap from "gsap";
	import { onMount } from "svelte";
	import ExperienceBox from "./components/ExperienceBox.svelte";
	import type { Experience } from "./types";

	const allExperiences: Experience[] = [
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
		},
		{
			title: "Undergraduate Researcher, Team Lead",
			organization:
				"Wearable Engineering and Assistive Robotics (WEAR) Lab",
			location: "Orlando, FL",
			date: "October 2019 - February 2022",
			description: [
				"Project manager and software developer on the Wearable Feedback for Environmental Interpretation (WeFEI) project.",
				"Developed a wearable system to assist the visually impaired with important daily challenges.",
			],
			technologies: "Python, Ubuntu, Intel RealSense SDK",
		},
		{
			title: "President, Front End Team",
			organization: "Knight Hacks",
			location: "Orlando, FL",
			date: "May 2022 - March 2023",
			description: [
				"Oversaw all club operations, conducted and organized interviews for new team members, and coordinated meetings and check-ins each week.",
				"Facilitated planning and organization of events to help students grow technically and non-technically.",
				"Developed pages and implemented login for our Hackathon Admin Tool.",
			],
			technologies: "React, TypeScript, TailwindCSS, GraphQL",
		},
		{
			title: "Vice President",
			organization: "Knight Hacks",
			location: "Orlando, FL",
			date: "December 2021 - May 2022",
			description: [
				"Assisted the President in all club operations and event organization.",
				"Organized and presented 5 technical workshops throughout the semester on popular JavaScript topics.",
			],
		},
		{
			title: "Projects Director",
			organization: "Knight Hacks",
			location: "Orlando, FL",
			date: "August 2021 - May 2022",
			description: [
				"Coordinated, oversaw, and provided resources to 20+ teams creating software projects.",
				"Restructured the program format and requirements to increase participation over 500% and improve retention through the end of the semester.",
			],
		},
	];

	onMount(() => {
		for (let i = 0; i < allExperiences.length; i++) {
			let selector = `.exp-${i}`;
			gsap.set(selector, { translateY: "5vw", opacity: 0 });
			gsap.to(selector, {
				translateY: "0",
				opacity: 1,
				scrollTrigger: {
					trigger: selector,
					start: "top 85%",
				},
				duration: 1,
				delay: (i - 1) * 0.05,
			});
		}
	});
</script>

<section id="experiences">
	<span class="timeline left" />
	<span class="timeline right" />
	<h1>Experiences</h1>
	{#each allExperiences as exp, index}
		<div
			class={`experience-container ${
				index % 2 == 0 ? "left" : "right"
			} exp-${index}`}
		>
			<span class="bullet" />
			<ExperienceBox
				experience={exp}
				align={index % 2 == 0 ? "left" : "right"}
			/>
		</div>
	{/each}
</section>

<style lang="scss">
	$bulletSize: 30px;

	section {
		display: block;
		position: relative;
		min-height: 0px;
		overflow: hidden;
		margin-top: 20vh;
	}

	.timeline {
		position: absolute;
		width: 5px;
		height: calc(100%);
		top: 0;
		background-color: $text-primary;

		&.left {
			left: calc(5vw - 2.5px);
		}

		&.right {
			right: calc(5vw - 2.5px);
		}
	}

	h1 {
		color: $text-highlight;
		width: 100%;
		text-align: center;
		font-size: 5em;
		margin-top: 0;
		margin-bottom: 30px;
	}

	.experience-container {
		display: flex;
		position: relative;
		margin: 100px 0px;

		&.left {
			justify-content: start;
			padding-left: 10vw;
			& > .bullet {
				left: calc(5vw - $bulletSize / 2);
			}
		}

		&.right {
			justify-content: end;
			padding-right: 10vw;
			& > .bullet {
				right: calc(5vw - $bulletSize / 2);
			}
		}
	}

	.bullet {
		width: $bulletSize;
		height: $bulletSize;
		border-radius: 100%;
		background-color: $text-primary;
		position: absolute;
		top: calc(50% - $bulletSize / 2);
	}
</style>
