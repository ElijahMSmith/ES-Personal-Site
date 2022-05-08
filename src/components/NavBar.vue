<script setup lang="ts">
import NavButton from "./NavButton.vue";
</script>

<template>
	<div id="navbarContainer" class="w-full flex justify-center">
		<NavButton id="aboutMeLink" :onPage="true" to="/about">
			About Me
		</NavButton>
		<NavButton id="experienceLink" :onPage="false" to="/experience">
			Experience
		</NavButton>
		<NavButton id="projectsLink" :onPage="false" to="/projects">
			Projects
		</NavButton>
		<NavButton id="connectLink" :onPage="false" to="/connect">
			Connect
		</NavButton>
	</div>
</template>

<style></style>
