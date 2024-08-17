<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";

	let leftTech = ["Golang", "Java", "TypeScript", "Python", "Dart", "C"];
	let rightTech = [
		"Linux",
		"Docker",
		"Kubernetes/Helm",
		"MongoDB",
		"SQL",
		"ReactJS",
	];

	onMount(() => {
		for (let i = 1; i <= 3; i++) {
			let selector = `.slide-${i}`;
			gsap.set(selector, { translateX: "-10vw", opacity: 0 });
			gsap.to(selector, {
				translateX: "0",
				opacity: 1,
				scrollTrigger: {
					trigger: selector,
					start: "top 85%",
				},
				duration: 1,
				delay: (i - 1) * 0.05,
			});
		}

		for (let i = 0; i < leftTech.length + rightTech.length; i++) {
			const selector = `.tech-${i}`;
			gsap.set(selector, { translateX: "-10vw", opacity: 0 });
			gsap.to(selector, {
				translateX: "0",
				opacity: 1,
				scrollTrigger: {
					trigger: selector,
					start: "top 85%",
				},
				duration: 0.5,
				delay: (i + 3) * 0.1,
			});
		}
	});
</script>

<section id="about">
	<h1 class="slide-1">About Me</h1>
	<p class="slide-2">
		I am a software engineer living in Chicago, IL. Currently, I develop
		platform solutions for IMC Trading.
	</p>
	<p class="slide-3">
		I'm always looking for new professional and volunteering oportunities! Here
		are some of my favorite technologies to play with:
	</p>
	<div class="tech-container">
		<ul class="left">
			{#each leftTech as tech, index}
				<li class="tech-{index}">
					{tech}
				</li>
			{/each}
		</ul>
		<ul class="right">
			{#each rightTech as tech, index}
				<li class="tech-{index + leftTech.length}">{tech}</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	section {
		margin-bottom: 25vh;
		flex-direction: column;
		color: $text-primary;
		& > * {
			width: 70%;
			margin: 3vh;
		}
	}

	h1 {
		color: $text-highlight;
		font-size: 5em;
		margin-top: 10vh;
	}

	p {
		font-size: 2em;
		width: 70%;
	}

	.tech-container {
		display: flex;
		justify-content: space-evenly;
		& > ul {
			margin: 0px 5vw;
		}
	}

	li {
		font-size: 2em;
	}

	@keyframes -global-tech-slide {
		0% {
			transform: translateX(-100px);
			opacity: 0;
		}
		100% {
			transform: translateX(0px);
			opacity: 1;
		}
	}

	@media only screen and (max-width: 550px) {
		h1 {
			font-size: 3em;
		}

		p {
			font-size: 1.4em;
		}

		li {
			font-size: 1.4em;
		}
	}
</style>
