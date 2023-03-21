<script lang="ts">
	import gsap from "gsap";
	import { onMount } from "svelte";
	import { allExperiences } from "../content";
	import { isExperience, type Experience, type Project } from "../types";
	import ContentBoxWrapper from "./ContentBoxWrapper.svelte";

	export let header: string;
	export let content: Experience[] | Project[];

	const base = isExperience(content[0]) ? 0 : allExperiences.length;
	const typeName = isExperience(content[0]) ? "experience" : "project";

	onMount(() => {
		let selector: string;
		for (let i = 0; i < content.length; i++) {
			selector = `.item-${base + i}`;
			gsap.set(selector, { translateY: "5vw", opacity: 0 });
			gsap.to(selector, {
				translateY: "0",
				opacity: 1,
				scrollTrigger: {
					trigger: selector,
					start: "top 90%",
				},
				duration: 1,
			});
		}

		selector = `.header-${typeName}`;
		gsap.set(selector, { translateY: "5vw", opacity: 0 });
		gsap.to(selector, {
			opacity: 1,
			translateY: "0",
			scrollTrigger: {
				trigger: selector,
				start: "top 90%",
			},
			duration: 1,
		});
	});
</script>

<div class="content-wrapper">
	<span class="timeline left" />
	<span class="timeline right" />
	<h1 class={`header-${typeName}`}>{header}</h1>

	{#each content as item, index}
		<div
			class={`item-container ${index % 2 == 0 ? "left" : "right"} item-${
				base + index
			}`}
		>
			<span class="bullet" />
			<ContentBoxWrapper
				{item}
				align={index % 2 == 0 ? "left" : "right"}
			/>
		</div>
	{/each}
</div>

<style lang="scss">
	$bulletSize: 30px;

	.content-wrapper {
		position: relative;
	}

	.timeline {
		position: absolute;
		width: 5px;
		height: calc(100% + 100px);
		top: 0;
		background-color: $text-primary;

		&.left {
			left: calc(5vw - 2.5px);
		}

		&.right {
			right: calc(5vw - 2.5px);
		}
	}

	h1 {
		color: $text-highlight;
		width: 100%;
		text-align: center;
		font-size: 5em;
		margin-top: 0;
		margin-bottom: 30px;
	}

	.item-container {
		display: flex;
		position: relative;
		margin: 100px 0px;

		&.left {
			justify-content: start;
			padding-left: 10vw;
			& > .bullet {
				left: calc(5vw - $bulletSize / 2);
			}
		}

		&.right {
			justify-content: end;
			padding-right: 10vw;
			& > .bullet {
				right: calc(5vw - $bulletSize / 2);
			}
		}
	}

	.bullet {
		width: $bulletSize;
		height: $bulletSize;
		border-radius: 100%;
		background-color: $text-primary;
		position: absolute;
		top: calc(50% - $bulletSize / 2);
	}
</style>
