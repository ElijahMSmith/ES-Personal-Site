<script lang="ts">
	import {
		isExperience,
		type Content,
		type Experience,
		type Project,
	} from "../types";
	export let item: Content;
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
	<h3 class="content-title">{title}</h3>
	<div class="inner-container {align}">
		<p class="date">{date}</p>
		{#if imgSrc && align === "right"}
			<img src={imgSrc} alt="Preview/Logo" />
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
		{#if imgSrc && align === "left"}
			<img src={imgSrc} alt="Preview/Logo" />
		{/if}
	</div>
</div>

<style lang="scss">
	* {
		color: $text-primary;
	}

	.content-container {
		background-color: $bg-accent;
		padding: 20px 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 20vh;

		&.left {
			text-align: start;
		}

		&.right {
			text-align: end;
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
			.date {
				left: calc(10vw + 30px);
			}
			img {
				margin-left: 30px;
			}
		}

		&.right {
			justify-content: end;
			.content-text-container {
				align-items: end;
				text-align: end;
			}
			.date {
				right: calc(10vw + 30px);
			}
			img {
				margin-right: 30px;
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
		text-align: start;
	}

	.content-technologies {
		font-size: 1.2em;
		font-weight: bold;
	}

	@media only screen and (max-width: 1000px) {
		img {
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
		}

		.content-description {
			display: none;
		}

		.content-technologies {
			font-size: 1em;
			font-weight: normal;
		}
	}
</style>
