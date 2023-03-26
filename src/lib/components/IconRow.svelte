<script lang="ts">
	export let dims = "5vw";
	let innerWidth = 0,
		halfWidth = 0;

	$: halfWidth = Math.floor(Number(dims.substring(0, dims.length - 2)) / 2);

	type Link = {
		href: string;
		src: string;
		alt: string;
	};

	let links: Link[] = [
		{
			href: "https://github.com/ElijahMSmith",
			src: "github.svg",
			alt: "GitHub link",
		},
		{
			href: "https://linkedin.com/in/elijahmsmith",
			src: "linkedin.svg",
			alt: "LinkedIn link",
		},
		{
			href: "https://codepen.io/ElijahMSmith",
			src: "codepen.svg",
			alt: "Codepen link",
		},
	];

	if (innerWidth <= 632)
		links = [
			{
				href: "mailto:elijah.matthew.smith@gmail.com",
				src: "email.svg",
				alt: "Email link",
			},
			...links,
		];
</script>

<svelte:window bind:innerWidth />
<div>
	{#each links as link}
		<a target="_blank" rel="noopener noreferrer" href={link.href}>
			<svg width={dims} height={dims}>
				<circle
					cx={halfWidth}
					cy={halfWidth}
					r={halfWidth + 10}
					stroke="white"
					stroke-width="2"
					fill="none"
				/>
			</svg>
			<img
				style="width:{dims}; height: {dims}"
				src={link.src}
				alt={link.alt}
			/>
		</a>
	{/each}
</div>

<style lang="scss">
	a {
		background: none;
		border: none;
		margin: 0px 4vw;
		position: relative;
		display: inline-block;
	}

	a:hover {
		svg {
			stroke-dashoffset: 0;
		}
	}

	svg {
		position: absolute;
		top: 0px;
		left: 0px;
		overflow: visible;
		stroke-dasharray: 250;
		stroke-dashoffset: 250;
		transition: stroke-dashoffset 0.3s linear;
	}
</style>
