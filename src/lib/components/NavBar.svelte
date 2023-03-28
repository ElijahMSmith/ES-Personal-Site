<script lang="ts">
	import { onMount } from "svelte";

	$: showMobileMenu = false;
	let innerWidth: number;
	let innerHeight: number;

	let activeLink: HTMLAnchorElement;
	let activeSection = "intro";

	let lastScrollTop = 0;
	const barProps = {
		shouldClose: false,
		isOpen: true,
	};
	let closeInterval: number;

	function toggleMenu() {
		showMobileMenu = !showMobileMenu;
	}

	function updateActive() {
		let maxCoveringPercent = 0;
		let maxCoveringSection = "";
		document.querySelectorAll<HTMLElement>("section").forEach((section) => {
			// x, y, width, height, top, left, right, bottom
			let bbox = section.getBoundingClientRect();

			let coverPx = Math.max(
				0,
				Math.min(innerHeight, bbox.bottom) - Math.max(0, bbox.top)
			);

			let coverFrac = coverPx / innerHeight;
			if (coverFrac > maxCoveringPercent) {
				maxCoveringPercent = coverFrac;
				maxCoveringSection = section.id;
			}

			// console.log(section.id + ": " + coverFrac);
		});
		if (maxCoveringSection !== activeSection) {
			activeSection = maxCoveringSection;
			activeLink = document.querySelector(
				`a[href="#${maxCoveringSection}"]`
			);
			updateLinkStyling();
		}
	}

	function updateLinkStyling() {
		document
			.querySelectorAll(".nav-link")
			.forEach((otherLink) => otherLink.classList.remove("active"));

		if (activeLink) activeLink.classList.add("active");
	}

	function updateNavBar() {
		const st = window.pageYOffset || document.documentElement.scrollTop;
		if (st < lastScrollTop) {
			// Scroll up - open navbar if closed immediately
			if (!barProps.isOpen) {
				barProps.isOpen = true;
				document.querySelector<HTMLDivElement>(
					"#nav-container"
				).style.transform = "translateY(0%)";
			}
			barProps.shouldClose = false;
		} else if (st > lastScrollTop) {
			// Scroll down
			// Do nothing if interval already set
			if (closeInterval) return;

			// Set shouldClose to true
			// Set interval to close after x seconds
			// At that time, if still shouldClose, transform and set isOpen to false
			barProps.shouldClose = true;
			closeInterval = setInterval(() => {
				// console.log(new Date().getMilliseconds(), barProps);
				if (barProps.shouldClose) {
					barProps.isOpen = false;
					document.querySelector<HTMLDivElement>(
						"#nav-container"
					).style.transform = "translateY(-100%)";
					barProps.shouldClose = false;
				}
				clearInterval(closeInterval);
				closeInterval = undefined;
			}, 500);
		}
		// For Mobile or negative scrolling
		lastScrollTop = st <= 0 ? 0 : st;
	}

	onMount(() => {
		document
			.querySelectorAll<HTMLAnchorElement>(".nav-link")
			.forEach((link) => {
				link.addEventListener("click", () => {
					activeLink = link;
					updateLinkStyling();
					if (showMobileMenu) toggleMenu();
				});
			});

		window.addEventListener(
			"scroll",
			() => {
				updateActive();
				updateNavBar();
			},
			false
		);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

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
		transition: transform 0.3s ease-in-out;
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
		$dur: 0.7s;
		$br: 15px;
		#section-links-container {
			position: absolute;
			left: 0px;
			top: -400px;
			width: 100%;
			background: $bg-alternate;
			padding-top: 10%;
			transition: top $dur cubic-bezier(0.49, 0, 0.83, 0.31);
			border-bottom-left-radius: $br;
			border-bottom-right-radius: $br;

			&.active {
				top: 0px;
				transition: top $dur cubic-bezier(0.16, 0.61, 0.3, 0.91);
			}

			a {
				display: block;
				margin-top: 10px;
				margin-bottom: 10px;

				&::before {
					position: absolute;
					content: "";
					height: 2px;
					bottom: -8px;
					left: 0%;
					width: 90vw;
					background: $text-primary;
					transition: width 0.3s ease-out;
				}

				&:last-child {
					&::before {
						display: none;
					}
					margin-bottom: 20px;
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

			// &:hover,
			// &.active {
			&:hover {
				&::after {
					top: 0px;
				}
			}

			img {
				height: 100%;
				width: 100%;
				z-index: 30;
				position: relative;
				border-radius: 100%;
			}
		}

		#nav-container {
			height: 60px;
		}

		#resume-link {
			background-color: $bg-primary;
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
