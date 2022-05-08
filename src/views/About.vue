<script setup lang="ts">
import IconBar from "../components/IconBar.vue";
</script>

<template>
	<div id="contentFrame" class="w-full h-screen relative">
		<div class="flex justify-center items-center h-3/4">
			<div
				id="profileFrame"
				class="w:1/2 h:1/4 md:flex justify-center items-center sm:block"
			>
				<div
					id="profileContainer"
					class="xl:mr-80 lg:mr-40 md:mr-20 mx-auto my-auto"
				>
					<p class="font-bold text-6xl my-10">Elijah Smith</p>
					<p class="my-10">Rising Senior at UCF</p>
					<p class="my-10">Honors CS and Mathematics</p>
					<p class="my-10">Full Stack JavaScript Enthusiast</p>
					<p class="my-10">President of Knight Hacks</p>
					<IconBar />
				</div>
				<div
					id="mask"
					class="mx-auto my-auto rounded-full bg-white xl:w-128 w-96 xl:h-128 h-96 overflow-hidden border-4 border-darkblue"
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

<style>
p {
	text-align: center;
	font-family: "Anek Odia", "sans-serif";
	font-style: normal;
	font-size: 1.5rem; /* 24px */
	line-height: 2rem; /* 32px */
	display: block;
	color: #084b83;
	width: 100%;
}
</style>
