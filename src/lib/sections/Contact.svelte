<script lang="ts">
	import IconRow from "../IconRow.svelte";
</script>

<section id="contact">
	<h1>Get in Touch With Me!</h1>
	<a
		target="_blank"
		rel="noopener noreferrer"
		href="mailto:elijah.matthew.smith@gmail.com"
		>elijah.matthew.smith@gmail.com</a
	>
	<IconRow dims="75px" />
</section>

<style lang="scss">
	$m: 5vh;

	section {
		flex-direction: column;
		a,
		h1 {
			color: $text-primary;
		}
	}

	h1 {
		font-size: 5em;
		margin-bottom: $m;
	}
	a {
		font-size: 3em;
		margin-bottom: calc($m * 2);
	}
</style>
