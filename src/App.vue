<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });

const increment = () => {
	state.count++;
};
</script>

<template>
	<div class="app">
		<button @click="increment">{{ state.count }}</button>
	</div>
</template>
