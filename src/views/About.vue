<script setup lang="ts">
import IconBar from "../components/IconBar.vue";
</script>

<template>
	<div
		id="contentFrame"
		class="w-full h-screen flex content-center justify-center overflow-auto"
	>
		<div class="flex justify-center items-center my-auto">
			<div
				id="profileFrame"
				class="w:1/2 h:1/4 md:flex justify-center items-center sm:block"
			>
				<div
					id="profileContainer"
					class="xl:mr-40 md:mr-10 mx-auto my-auto"
				>
					<h1
						class="font-bold text-6xl w-full text-center text-darkblue"
					>
						Elijah Smith
					</h1>
					<p class="mt-12">Rising Senior at UCF</p>
					<p class="my-6">Honors CS and Mathematics</p>
					<p class="my-6">Full Stack JavaScript Enthusiast</p>
					<p class="mb-12">President of Knight Hacks</p>
					<IconBar />
				</div>
				<div
					id="mask"
					class="mx-auto my-auto rounded-full bg-white xl:w-96 w-80 xl:h-96 h-80 overflow-hidden border-4 border-darkblue md:mt-0 mt-20"
				>
					<img
						src="../assets/headshot.jpg"
						alt="My Face, Usually :("
						class="rounded m-auto inline h-full w-auto"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
p {
	text-align: center;
	font-family: "Anek Odia", "sans-serif";
	font-style: normal;
	font-size: 1.5rem; /* 24px */
	line-height: 1.5rem; /* 32px */
	display: block;
	color: #084b83;
	width: 100%;
}
</style>
