<script lang="ts">
	import {
		isExperience,
		isProject,
		type Content,
		type Experience,
		type Project,
	} from "../types";
	export let item: Content;
	export let align: "right" | "left";

	type opString = string | undefined;

	const { title, date, description, imgSrc, videoSrc } = item;

	let organization: opString, location: opString, technologies: opString;
	if (isExperience(item)) {
		organization = (item as Experience).organization;
		location = (item as Experience).location;
		technologies = (item as Experience).technologies;
	} else if (isProject(item)) {
		technologies = (item as Project).technologies;
	}
</script>

<div class="content-container {align}">
	<p class="date">{date}</p>
	<h3 class="content-title">{title}</h3>
	<div class="inner-container {align}">
		{#if align === "right"}
			{#if imgSrc}
				<img class="preview" src={imgSrc} alt="Preview/Logo" />
			{:else if videoSrc}
				<iframe
					class="preview"
					title="Preview"
					src={videoSrc}
					allowfullscreen
				/>
			{/if}
		{/if}
		<div class="content-text-container">
			{#if organization && location}
				<p class="content-subtitle">
					{organization} - {location}<br />
				</p>
			{/if}
			<ul class="desc-bullets">
				{#each description as bullet}
					<li class="content-description">{bullet}</li>
				{/each}
			</ul>
			{#if technologies}
				<p class="content-technologies">{technologies}</p>
			{/if}
		</div>
		{#if align === "left"}
			{#if imgSrc}
				<img class="preview" src={imgSrc} alt="Preview/Logo" />
			{:else if videoSrc}
				<iframe
					class="preview"
					title="Preview"
					src={videoSrc}
					allowfullscreen
				/>
			{/if}
		{/if}
	</div>
</div>

<style lang="scss">
	* {
		color: $text-primary;
	}

	$inner-padding: 30px;

	.content-container {
		background-color: $bg-accent;
		padding: 20px 30px;
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		min-height: 20vh;
		border-radius: 10px;

		&.left {
			text-align: start;
			.date {
				left: $inner-padding;
			}
		}

		&.right {
			text-align: end;
			.date {
				right: $inner-padding;
			}
		}
	}

	.inner-container {
		display: flex;
		align-items: center;
		margin: 0px;

		&.left {
			justify-content: start;
			.content-text-container {
				align-items: start;
				text-align: start;
			}
			.preview {
				margin-left: $inner-padding;
			}
		}

		&.right {
			justify-content: end;
			.content-text-container {
				align-items: end;
				text-align: end;
			}
			.preview {
				margin-right: $inner-padding;
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
		justify-content: space-evenly;
		flex: 3;
		& > * {
			margin: 10px 0px;
		}
		ul {
			text-align: start;
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

	.preview {
		flex: 1;
		border-radius: 20px;
		max-height: 200px;
		max-width: 200px;
		object-fit: contain;
	}

	.content-title {
		font-size: 2.4em;
		font-weight: bold;
		margin: 0px;
	}

	.content-subtitle {
		margin-top: 0px;
		font-size: 1.4em;
		font-weight: bold;
	}

	.content-description {
		font-size: 1.2em;
	}

	.content-technologies {
		font-size: 1.2em;
		font-weight: bold;
	}

	@media only screen and (max-width: 1000px) {
		.preview {
			display: none;
		}
	}

	@media only screen and (max-width: 600px) {
		.content-container {
			min-height: auto;
		}

		.content-title {
			font-size: 1.8em;
		}

		.content-subtitle {
			font-size: 1.2em;
			margin-bottom: 0;
			font-weight: normal;
		}

		.content-description {
			display: none;
		}

		.content-technologies {
			font-size: 1em;
			font-weight: normal;
		}

		.content-text-container {
			margin-top: 20px;
			ul {
				display: none;
			}
		}

		.date {
			width: 100%;
		}
	}
</style>
