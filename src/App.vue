<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import colors from "./assets/colors.js";

const route = useRoute();

watch(
	() => route.name,
	(val) => {
		switch (val) {
			case "About":
				document.body.style.backgroundColor = colors.lightpurple;
				break;
			case "Experience":
				document.body.style.backgroundColor = colors.lightgreen;
				break;
			case "Projects":
				document.body.style.backgroundColor = colors.lightyellow;
				break;
			case "Connect":
				document.body.style.backgroundColor = colors.lightred;
				break;
			default:
				document.body.style.backgroundColor = colors.lightblue;
				break;
		}
	}
);
</script>

<template>
	<NavBar />
	<router-view />
</template>

<style></style>
