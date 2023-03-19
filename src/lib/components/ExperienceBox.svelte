<script lang="ts">
	export let title: string;
	export let organization: string;
	export let description: string;
	export let date: string;
	export let imgSrc = "images/contentPlaceholder.png";
	export let align: "right" | "left";
</script>

<div class="content-container {align}">
	{#if align == "left"}
		<div class="content-text-container">
			<h3 class="content-title">{title}</h3>
			<p class="content-org">{organization}</p>
			<p class="content-description">{description}</p>
		</div>
		<img src={imgSrc} alt="Preview/Logo" />
	{:else}
		<img src={imgSrc} alt="Preview/Logo" />
		<div class="content-text-container">
			<h3 class="content-title">{title}</h3>
			<div class="text-inline">
				<p class="content-org">{organization}</p>
				<p class="date">{date}</p>
			</div>
			<p class="content-description">{description}</p>
		</div>
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
		height: 20vh;
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
			}
		}
	}

	.content-text-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0px 30px;
		& > * {
			margin: 10px 0px;
		}
	}

	img {
		height: 60%;
		margin: 0px 30px;
	}

	.content-title {
		font-size: 2.4em;
		font-weight: normal;
		margin-top: 0px;
	}

	.content-org {
		font-size: 1.4em;
		font-weight: bold;
	}

	.content-description {
		font-size: 1.2em;
	}
</style>
