<script setup lang="ts">
// TODO: Use router to go back to last page on history
// If there is no history, send them to the "/about" page instead

// Also TODO: Use https://vuetifyjs.com/en/components/buttons/ or make my own cool button!
</script>

<template>
	<div class="h-screen w-screen">
		<div class="h-3/4 flex justify-center items-center">
			<div>
				<h1
					class="font-anek-odia text-5xl text-darkblue font-bold block text-center"
				>
					404 - Page not found!
				</h1>

				<div class="flex w-full justify-center">
					<v-btn>Back to Safety</v-btn>
				</div>
			</div>
		</div>
	</div>
</template>
