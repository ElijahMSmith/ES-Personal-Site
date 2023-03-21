<script lang="ts">
	import {
		isExperience,
		isProject,
		type Content,
		type Experience,
		type Project,
	} from "../types";
	import ContentBox from "./ContentBox.svelte";
	export let item: Content;
	export let align: "right" | "left";

	let experience: Experience | undefined;
	let project: Project | undefined;
	$: experience = isExperience(item) ? (item as Experience) : undefined;
	$: project = isProject(item) ? (item as Project) : undefined;
</script>

{#if experience}
	<div class={`content-wrapper ${align}`}>
		<ContentBox item={experience} {align} />
	</div>
{:else}
	<a
		class={`content-wrapper ${align}`}
		href={project.link}
		target="_blank"
		rel="noopener noreferrer"
	>
		<ContentBox item={project} {align} />
	</a>
{/if}

<style lang="scss">
	.content-wrapper {
		width: 80%;
		display: flex;
		&.left {
			justify-content: start;
		}

		&.right {
			justify-content: end;
		}
	}
</style>
