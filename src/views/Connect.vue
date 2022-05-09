<script setup lang="ts">
import IconBar from "../components/IconBar.vue";
</script>

<template>
	<div id="contentFrame" class="w-full h-screen relative">
		<div class="flex justify-center items-center h-3/4">
			<div id="profileFrame" class="w:1/2 h:1/4">
				<h1
					class="w-full text-center text-5xl font-bold text-darkblue max-w-xl leading-relaxed"
				>
					I'm Always Looking for New Opportunities!
				</h1>
				<p class="mt-16">Personal Inquiries:</p>
				<p class="mt-2">elijah.matthew.smith@gmail.com</p>
				<p class="mt-10">Knight Hacks Inquiries</p>
				<p class="mt-2 mb-16">elijah@knighthacks.org</p>
				<IconBar />
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
	line-height: 2rem; /* 32px */
	display: block;
	color: #084b83;
	width: 100%;
}
</style>
