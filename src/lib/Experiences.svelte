<script lang="ts">
	import ExperienceBox from "./components/ExperienceBox.svelte";

	interface Experience {
		title: string;
		description: string;
		organization: string;
		date: string;
		imgSrc?: string;
	}

	const allExperiences: Experience[] = [
		{
			title: "Software Engineer",
			organization: "IMC - Chicago, IL",
			date: "Aug 2022 - Present",
			description:
				"Developing internal tools for developers on the Internal Cloud team.",
		},
	];
</script>

<section id="experiences">
	<!-- TODO: Map allExperiences and alternate 'align' property -->
	<span class="timeline left" />
	<span class="timeline right" />
	<h1>Experiences</h1>
</section>

<style lang="scss">
	section {
		display: block;
		position: relative;
		min-height: 0px;
		overflow: hidden;
	}

	.timeline {
		position: absolute;
		width: 5px;
		height: calc(80%);
		top: 10vh;
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
</style>
