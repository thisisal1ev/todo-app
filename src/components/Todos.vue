<script lang="ts" setup>
import { Todo } from '../App.vue'
import TodosItem from './TodosItem.vue'

interface Props {
	todos: Todo[]
}

defineProps<Props>()
defineEmits(['remove-todo'])
</script>

<template>
	<div class="flex justify-center">
		<ul class="mt-8 max-w-lg mx-0 grow">
			<TodosItem
				v-for="todo in todos"
				@remove-todo="(id:number) => $emit('remove-todo', id)"
				:key="todo.id"
				:todo="todo"
			/>
		</ul>
	</div>
</template>
