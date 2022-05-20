<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import colors from "./assets/colors.js";

const route = useRoute();
let routeName = ref("");
let bgc = ref({ prev: colors.lightpurple, new: colors.lightpurple });

watch(
	() => route.name,
	(val) => {
		bgc.value.prev = bgc.value.new;
		switch (val) {
			case "About":
				bgc.value.new = colors.lightpurple;
				routeName.value = "About";
				break;
			case "Experience":
				bgc.value.new = colors.lightgreen;
				routeName.value = "Experience";
				break;
			case "Projects":
				bgc.value.new = colors.lightyellow;
				routeName.value = "Projects";
				break;
			case "Connect":
				bgc.value.new = colors.lightred;
				routeName.value = "Connect";
				break;
			default:
				bgc.value.new = colors.lightblue;
				routeName.value = "Not Found";
				break;
		}
		document.body.style.backgroundColor = bgc.value.new;
	}
);
</script>

<template>
	<NavBar :routeName="routeName" />
	<router-view v-slot="{ Component }">
		<transition name="route" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style>
.route-enter-from {
	opacity: 0;
}

.route-enter-active {
	transition: all 0.4s ease-out;
}

.route-leave-to {
	opacity: 0;
}

.route-leave-active {
	transition: all 0.4s ease-in;
}
</style>
