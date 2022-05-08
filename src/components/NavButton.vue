<script setup lang="ts">
const { id, onPage } = defineProps<{
	id: string;
	onPage: boolean;
	to: string;
}>();
</script>

<template>
	<router-link
		:id="id"
		:class="
			'xl:mx-24 lg:mx-16 sm:mx-8 mx-4 my-5 sm:inline-block hidden font-anek-odia text-2xl font-normal text-darkblue ' +
			(onPage ? 'border-b-2 border-darkblue' : '')
		"
		:to="to"
	>
		<slot />
	</router-link>
</template>

<style></style>
