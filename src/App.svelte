<script lang="ts">
	import NavBar from "./lib/components/NavBar.svelte";
	import Intro from "./lib/Intro.svelte";
	import About from "./lib/About.svelte";
	import Experiences from "./lib/Experiences.svelte";
	import Projects from "./lib/Projects.svelte";
	import Contact from "./lib/Contact.svelte";

	import { gsap } from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);
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
