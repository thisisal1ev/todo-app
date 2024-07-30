<template>
	<div class="flex justify-center">
		<ul class="mt-8 max-w-lg mx-0 grow">
			<TodosItem
				v-for="(todo, index) in todos"
				@remove-todo="removeTodo"
				:key="index"
				:todo="todo"
			/>
		</ul>
	</div>
</template>

<script setup>
import TodosItem from './TodosItem.vue'
import { defineEmits, defineProps } from 'vue'

defineProps({
	todos: {
		type: Array,
		required: true,
	},
})

const emit = defineEmits(['remove-todo'])

function removeTodo(id) {
	emit('remove-todo', id)
}
</script>
