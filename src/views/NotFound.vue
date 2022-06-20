<script setup lang="ts">
// TODO: Use router to go back to last page on history
// If there is no history, send them to the "/about" page instead

// Also TODO: Use https://vuetifyjs.com/en/components/buttons/ or make my own cool button!
</script>

<template>
	<div
		class="h-screen w-screen flex content-center justify-center items-center"
	>
		<div>
			<h1
				class="font-anek-odia text-5xl text-darkblue font-bold block text-center"
			>
				404 - Page not found!
			</h1>

			<div class="flex w-full justify-center">
				<router-link
					to="/About"
					class="transition duration-100 rounded-full bg-button text-white px-5 py-2 mt-5 hover:bg-buttonHover focus:bg-buttonHover focus:outline-black focus:outline-2 focus:outline"
					>Back to Safety</router-link
				>
			</div>
		</div>
	</div>
</template>
