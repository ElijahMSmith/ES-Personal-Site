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
		background: #fff;
		border: none;
		border-radius: 15px;
		transition: background-color 0.3s;
	}

	button::before {
		content: "";
		position: absolute;
		width: 1.3em;
		height: 1.3em;
		border-radius: 50%;
		background: $bg-alternate;
		top: 0.13em;
		right: 1.5em;
		transition: transform 0.3s, background-color 0.3s;
	}

	button[aria-checked="true"] {
		background-color: $bg-alternate;
	}

	button[aria-checked="true"]::before {
		transform: translateX(1.3em);
		background-color: #fff;
	}

	button:focus {
		box-shadow: 0 0px 0px 1px $bg-alternate;
	}
</style>
