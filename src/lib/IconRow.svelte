<script lang="ts">
	export let dims = "5vw";
	function open(url: string) {
		window.open(url, "_blank");
	}
</script>

<div>
	<button on:click={() => open("https://github.com/ElijahMSmith")}>
		<img
			style="width:{dims}; height: {dims}"
			src="/src/assets/github.svg"
			alt="GitHub link"
		/>
	</button>
	<button on:click={() => open("https://linkedin.com/in/elijahmsmith")}>
		<img
			style="width:{dims}; height: {dims}"
			src="/src/assets/linkedin.svg"
			alt="LinkedIn link"
		/>
	</button>
</div>

<style lang="scss">
	button {
		background: none;
		border: none;
		padding: 0px;
		margin: 0px 2vw;
		&:hover {
			cursor: pointer;
		}
	}
</style>
