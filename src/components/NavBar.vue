<script setup lang="ts">
import NavButton from "./NavButton.vue";
const { routeName } = defineProps<{
	routeName: string;
}>();
</script>

<template>
	<div
		id="navbarContainer"
		class="w-full md:flex justify-center fixed top-0 z-10 hidden"
	>
		<NavButton id="aboutMeLink" :onPage="routeName === 'About'" to="/about">
			About Me
		</NavButton>
		<NavButton
			id="experienceLink"
			:onPage="routeName === 'Experience'"
			to="/experience"
		>
			Experience
		</NavButton>
		<NavButton
			id="projectsLink"
			:onPage="routeName === 'Projects'"
			to="/projects"
		>
			Projects
		</NavButton>
		<NavButton
			id="connectLink"
			:onPage="routeName === 'Connect'"
			to="/connect"
		>
			Connect
		</NavButton>
	</div>
</template>

<style></style>
