<script lang="ts">
	import Timeline from "./components/Timeline.svelte";
	import { allProjects } from "./content";
	import type { Project } from "./types";

	let projectsWithImg = allProjects.map<Project>((proj) => {
		return { ...proj, imgSrc: "github.svg" };
	});
</script>

<section id="projects">
	<Timeline header="Projects" content={projectsWithImg} />
</section>

<style lang="scss">
	section {
		display: block;
		margin-top: 0px;
	}
</style>
