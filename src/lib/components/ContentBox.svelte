<script lang="ts">
	import { isExperience, type Experience, type Project } from "../types";
	export let item: Experience | Project;
	export let align: "right" | "left";

	type opString = string | undefined;

	const { title, date, technologies, description, imgSrc } = item;

	let organization: opString, location: opString;
	if (isExperience(item)) {
		organization = (item as Experience).organization;
		location = (item as Experience).location;
	}
</script>

<div class="content-container {align}">
	<p class="date">{date}</p>
	{#if imgSrc && align === "right"}
		<img src={imgSrc} alt="Preview/Logo" />
	{/if}
	<div class="content-text-container">
		<h3 class="content-title">{title}</h3>

		{#if organization && location}
			<p class="content-subtitle">
				{organization} - {location}<br />
			</p>
		{/if}
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
		color: $text-primary;
	}

	.content-container {
		background-color: $bg-accent;
		display: flex;
		align-items: center;
		min-height: 20vh;
		padding: 20px 0px;
		margin: 0px;

		&.left {
			justify-content: start;
			.content-text-container {
				align-items: start;
				text-align: start;
				margin: 0px 30px;
			}
			.date {
				left: calc(10vw + 30px);
			}
			img {
				margin-right: 30px;
			}
		}

		&.right {
			justify-content: end;
			.content-text-container {
				align-items: end;
				text-align: end;
				margin: 0px 30px;
			}
			.date {
				right: calc(10vw + 30px);
			}
			img {
				margin-left: 30px;
			}
		}
	}

	.date {
		position: absolute;
		top: -70px;
		font-size: 1.4em;
		font-weight: bold;
	}

	.content-text-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
		flex: 1;
		border-radius: 20px;
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
