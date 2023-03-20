<script lang="ts">
	import type { Experience } from "../types";
	export let experience: Experience;

	const {
		title,
		organization,
		location,
		date,
		technologies,
		description,
		imgSrc,
	} = experience;
	export let align: "right" | "left";
</script>

<div class="content-container {align}">
	{#if imgSrc && align === "right"}
		<img src={imgSrc} alt="Preview/Logo" />
	{/if}
	<div class="content-text-container">
		<h3 class="content-title">{title}</h3>
		<p class="content-subtitle">
			{organization} - {location}<br />
			{date}
		</p>
		<ol class="desc-bullets">
			{#each description as bullet}
				<li class="content-description">{bullet}</li>
			{/each}
		</ol>
		{#if technologies}
			<p class="content-technologies">{technologies}</p>
		{/if}
	</div>
	{#if imgSrc && align === "left"}
		<img src={imgSrc} alt="Preview/Logo" />
	{/if}
</div>

<style lang="scss">
	* {
		text-decoration: none;
		color: $text-primary;
	}

	.content-container {
		background-color: $bg-accent;
		display: flex;
		align-items: center;
		min-height: 20vh;
		max-width: 80%;
		padding: 20px 0px;

		&.left {
			justify-content: start;
			.content-text-container {
				align-items: start;
			}
		}

		&.right {
			justify-content: end;
			.content-text-container {
				align-items: end;
				text-align: end;
			}
		}
	}

	.content-text-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0px 30px;
		flex: 3;
		& > * {
			margin: 10px 0px;
		}
	}

	.text-inline {
		display: flex;
		width: 100%;
		align-items: end;
		& > * {
			margin: 0px 0px;
		}
	}

	img {
		margin: 0px 30px;
		flex: 1;
	}

	.content-title {
		font-size: 2.4em;
		font-weight: normal;
		margin-top: 0px;
	}

	.content-subtitle {
		font-size: 1.4em;
		font-weight: bold;
	}

	.content-description {
		font-size: 1.2em;
		text-align: start;
	}

	.content-technologies {
		font-size: 1.2em;
		font-weight: bold;
	}
</style>
