<script lang="ts">
	import Timeline from "./components/Timeline.svelte";
	import { allProjects } from "./content";
	import type { Project } from "./types";

	let projectsWithImg = allProjects.map<Project>((proj) => {
		if (!proj.imgSrc && !proj.videoSrc) proj.imgSrc = "github.svg";
		return proj;
	});
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
