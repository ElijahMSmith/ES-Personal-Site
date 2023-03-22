<script lang="ts">
	import { onMount } from "svelte";

	let innerWidth: number;

	$: showMobileMenu = false;

	function toggleMenu() {
		showMobileMenu = !showMobileMenu;
	}

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

<svelte:window bind:innerWidth />

<div id="nav-container">
	<a
		id="resume-link"
		target="_blank"
		rel="noopener noreferrer"
		href="resume.pdf">Resume</a
	>

	<div id="section-links-container" class={showMobileMenu ? "active" : ""}>
		<a class="nav-link" href="#about">About</a>
		<a class="nav-link" href="#experiences">Experiences</a>
		<a class="nav-link" href="#projects">Projects</a>
		<a class="nav-link" href="#contact">Contact</a>
	</div>

	<button
		id="drawer-toggle"
		class={showMobileMenu ? "active" : ""}
		on:click={toggleMenu}
	>
		<img src="menu.svg" alt="Menu Toggle" />
	</button>
</div>

<style lang="scss">
	#nav-container {
		backdrop-filter: blur(10px);
		position: fixed;
		width: 100vw;
		height: 75px;
		left: 0px;
		top: 0px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0vh 10vw;
		box-sizing: border-box;
		z-index: 100;
	}

	#drawer-toggle {
		display: none;
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
		color: $text-primary;
		font-family: $font-stack;
		font-size: 1.4em;
	}

	#resume-link {
		border: 3px solid $text-primary;
		padding: 0px 10px;
		transition: background 0.2s linear, color 0.2s linear;
		&:hover {
			background: $bg-alternate;
		}
	}

	// Phone or very small
	@media only screen and (max-width: 800px) {
		#section-links-container {
			position: absolute;
			left: 0px;
			top: -400px;
			width: 100%;
			background: $bg-alternate;
			padding-top: 10%;
			transition: top 1s cubic-bezier(0.49, 0, 0.83, 0.31);

			&.active {
				top: 0px;
				transition: top 1s cubic-bezier(0.16, 0.61, 0.3, 0.91);
			}

			a {
				display: block;
				margin-top: 10px;
				margin-bottom: 10px;

				&::before {
					position: absolute;
					content: "";
					height: 2px;
					bottom: -10px;
					left: 0%;
					width: 85vw;
					background: $text-primary;
					transition: width 0.3s ease-out;
				}

				&:last-child {
					&::before {
						display: none;
					}
				}

				&::after {
					display: none;
				}
			}
		}

		#drawer-toggle {
			display: block;
			width: 45px;
			height: 45px;
			border-radius: 100%;
			background-color: $bg-primary;
			border: 2px solid $text-primary;
			cursor: pointer;
			position: relative;
			overflow: hidden;

			&::after {
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: $bg-alternate;
				top: -100%;
				left: 0px;
				border-radius: 100%;
				transition: top 0.7s cubic-bezier(0.12, 0.92, 0.38, 0.9);
			}

			&:hover,
			&.active {
				&::after {
					top: 0px;
				}
			}

			img {
				height: 100%;
				width: 100%;
				z-index: 30;
				position: relative;
			}
		}

		#nav-container {
			height: 60px;
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
