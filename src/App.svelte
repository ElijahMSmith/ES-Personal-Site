<script lang="ts">
	import NavBar from "./lib/NavBar.svelte";
	import Intro from "./lib/sections/Intro.svelte";
	import About from "./lib/sections/About.svelte";
	import Experiences from "./lib/sections/Experiences.svelte";
	import Projects from "./lib/sections/Projects.svelte";
	import Contact from "./lib/sections/Contact.svelte";

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
