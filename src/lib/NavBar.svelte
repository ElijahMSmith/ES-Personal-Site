<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		document.querySelectorAll(".nav-link").forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelectorAll(".nav-link")
					.forEach((otherLink) =>
						otherLink.classList.remove("active")
					);
				link.classList.add("active");
			});
		});
	});
</script>

<div id="nav-container">
	<a
		id="resume-link"
		target="_blank"
		rel="noopener noreferrer"
		href="resume.pdf">Resume</a
	>
	<div id="section-links-container">
		<a class="nav-link" href="#about">About</a>
		<a class="nav-link" href="#experiences">Experiences</a>
		<a class="nav-link" href="#projects">Projects</a>
		<a class="nav-link" href="#contact">Contact</a>
	</div>
	<!-- TODO: Add hamburger or some other replacement for hidden navigation links -->
</div>

<style lang="scss">
	#nav-container {
		backdrop-filter: blur(10px);
		// background-color: $bg-alternate;
		position: fixed;
		width: 100vw;
		height: 5vh;
		left: 0px;
		top: 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0vh 10vw;
		box-sizing: border-box;
	}

	#section-links-container > a {
		margin-left: 5vw;
		position: relative;

		&::after {
			position: absolute;
			content: "";
			height: 2px;
			bottom: 0px;
			left: 0;
			width: 0%;
			background: $text-primary;
			transition: width 0.3s ease-out;
		}

		&:hover {
			&::after {
				width: 100%;
			}
		}
	}

	:global(.nav-link.active) {
		&::after {
			width: 100% !important;
		}
	}

	a {
		text-decoration: none;
		color: $text-primary;
		font-family: $font-stack;
		font-size: 1.4em;
	}

	#resume-link {
		border: 3px solid $text-primary;
		padding: 0px 10px;
		transition: background 0.2s linear, color 0.2s linear;
		&:hover {
			background: $text-primary;
			color: $bg-primary;
		}
	}

	// Phone or very small
	@media only screen and (max-width: 800px) {
		#section-links-container {
			display: none;
		}

		#nav-container {
			justify-content: center;
		}
	}

	// Very lar desktop
	@media only screen and (min-width: 1500px) {
		a {
			font-size: 1.7em;
		}

		#nav-container {
			height: 7.5vh;
		}
	}
</style>
