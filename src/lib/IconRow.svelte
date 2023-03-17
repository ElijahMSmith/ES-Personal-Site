<script lang="ts">
	export let dims = "5vw";
	let innerWidth = 0;
	function open(url: string) {
		window.open(url, "_blank");
	}
</script>

<svelte:window bind:innerWidth />
<div>
	{#if innerWidth <= 632}
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="mailto:elijah.matthew.smith@gmail.com"
		>
			<img
				style="width:{dims}; height: {dims}"
				src="/src/assets/email.svg"
				alt="Email link"
			/>
		</a>
	{/if}

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://github.com/ElijahMSmith"
	>
		<img
			style="width:{dims}; height: {dims}"
			src="/src/assets/github.svg"
			alt="GitHub link"
		/>
	</a>

	<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://linkedin.com/in/elijahmsmith"
	>
		<img
			style="width:{dims}; height: {dims}"
			src="/src/assets/linkedin.svg"
			alt="LinkedIn link"
		/>
	</a>
</div>

<style lang="scss">
	a {
		background: none;
		border: none;
		padding: 0px;
		margin: 0px 4vw;
	}
</style>
