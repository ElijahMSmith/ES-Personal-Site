<script lang="ts">
	import NavBar from "./lib/components/NavBar.svelte";
	import Intro from "./lib/Intro.svelte";
	import About from "./lib/About.svelte";
	import Experiences from "./lib/Experiences.svelte";
	import Projects from "./lib/Projects.svelte";
	import Contact from "./lib/Contact.svelte";

	import { gsap } from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import { onMount } from "svelte";

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const cursors = document.querySelectorAll<HTMLSpanElement>(".cursor");

		document.addEventListener("mousemove", (event) => {
			cursors.forEach((cursor) => {
				cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
			});
		});

		document.querySelectorAll<HTMLElement>("a, button").forEach((item) => {
			item.addEventListener("mouseenter", () => {
				cursors.forEach((thing) => thing.classList.add("active"));
			});

			item.addEventListener("mouseleave", () => {
				cursors.forEach((thing) => thing.classList.remove("active"));
			});
		});
	});
</script>

<NavBar />
<main>
	<div id="main-container">
		<Intro />
		<About />
		<Experiences />
		<Projects />
		<Contact />
	</div>
</main>
<span class="cursor outer" />
<span class="cursor inner" />

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap");

	$bez-trans: cubic-bezier(0, 0.02, 0, 1);
	$duration: 0.7s;
	$cursor-col: $text-highlight;
	$opacity: 0.3;

	.cursor {
		opacity: $opacity;
		position: fixed;
		top: 0;
		left: 0;
		width: var(--size);
		height: var(--size);
		margin: calc((var(--size) + var(--border-size)) * -0.5) 0 0
			calc((var(--size) + var(--border-size)) * -0.5);
		z-index: 110;
		border-radius: 50%;
		pointer-events: none;
		transition: all $duration $bez-trans;
		will-change: transform;

		&.inner {
			--size: 4px;
			--border-size: 0px;
			background-color: $cursor-col;
		}

		&.outer {
			--size: 30px;
			--border-size: 1px;

			border: var(--border-size) solid $cursor-col;
		}
	}

	:global(.cursor.outer.active) {
		--size: 45px;
		--border-size: 3px;
	}

	@media only screen and (max-width: 800px) {
		.cursor {
			display: none;
		}
	}
</style>
