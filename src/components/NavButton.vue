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
			'xl:mx-24 lg:mx-16 sm:mx-8 mx-4 my-5 inline-block font-anek-odia text-2xl font-normal text-darkblue ' +
			(onPage ? 'border-b-2 border-darkblue' : 'hoverUnderline')
		"
		:to="to"
	>
		<slot />
	</router-link>
</template>

<style>
.hoverUnderline {
	position: relative;
	text-decoration: none;
	display: inline-block;
}
.hoverUnderline:after {
	display: block;
	content: "";
	border-bottom: solid 2px #084b83;
	transform: scaleX(0);
	transition: transform 250ms ease-in-out;
	transform-origin: 100% 50%;
}
.hoverUnderline:hover:after {
	transform: scaleX(1);
	transform-origin: 0 50%;
}
</style>
