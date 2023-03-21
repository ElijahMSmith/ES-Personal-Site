<script lang="ts">
	import Timeline from "./components/Timeline.svelte";
	import { allExperiences } from "./content";
</script>

<section id="experiences">
	<Timeline header="Experiences" content={allExperiences} />
</section>

<style lang="scss">
	section {
		margin-top: 20vh;
		display: block;
	}
</style>
