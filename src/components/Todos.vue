<template>
	<div class="flex justify-center">
		<ul class="mt-8 max-w-lg mx-0 grow">
			<TodosItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
		</ul>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
import TodosItem from './TodosItem.vue'

const props = defineProps({
	todos: {
		type: Array,
		required: true,
	},
})
</script>
