<script lang="ts">
	export let checked: boolean;
</script>

<div class="slider">
	<button
		role="switch"
		aria-checked={checked}
		on:click={() => (checked = !checked)}
	/>
</div>

<style lang="scss">
	$accent: CornflowerBlue;
	$gray: #ccc;

	.slider {
		display: flex;
		align-items: center;
	}

	button {
		width: 3em;
		height: 1.6em;
		position: relative;
		margin: 0;
		background: $gray;
		border: none;
		border-radius: 15px;
	}

	button::before {
		content: "";
		position: absolute;
		width: 1.3em;
		height: 1.3em;
		border-radius: 50%;
		background: #fff;
		top: 0.13em;
		right: 1.5em;
		transition: transform 0.3s;
	}

	button[aria-checked="true"] {
		background-color: $accent;
	}

	button[aria-checked="true"]::before {
		transform: translateX(1.3em);
		transition: transform 0.3s;
	}

	button:focus {
		box-shadow: 0 0px 0px 1px $accent;
	}
</style>
