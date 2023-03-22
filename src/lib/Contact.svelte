<script lang="ts">
	import IconRow from "./components/IconRow.svelte";

	let innerWidth = 0;

	$: iconDims = innerWidth <= 632 ? "50px" : "75px";
</script>

<svelte:window bind:innerWidth />

<section id="contact">
	<h1>Get in Touch With Me!</h1>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="mailto:elijah.matthew.smith@gmail.com"
	>
		{#if innerWidth > 632}
			elijah.matthew.smith@gmail.com
		{/if}
	</a>
	<IconRow dims={iconDims} />
</section>

<style lang="scss">
	$m: 5vh;

	section {
		flex-direction: column;
		height: 100vh;
		a,
		h1 {
			color: $text-primary;
			text-align: center;
			margin-left: 10vw;
			margin-right: 10vw;
		}
	}

	h1 {
		font-size: 5em;
		margin-bottom: $m;
	}

	a {
		font-size: 3em;
		margin-bottom: calc($m * 2);
		overflow-wrap: break-word;
		word-break: break-all;
		transition: all 0.2s linear;
		text-decoration: underline;
		&:hover {
			color: $bg-alternate;
		}
	}

	@media only screen and (max-width: 632px) {
		h1 {
			margin-bottom: 0px;
		}
	}

	@media only screen and (max-width: 1110px) {
		h1 {
			font-size: 3em;
		}

		a {
			font-size: 2em;
		}
	}
</style>
