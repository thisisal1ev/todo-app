<script lang="ts" setup>
import { ref } from 'vue'
import { Todo } from '../App.vue'
import { CheckIcon, EditIcon, TrashIcon, XIcon } from './icons'
import Checkbox from './Checkbox.vue'
import IconButton from './IconButton.vue'

interface Props {
	todo: Todo
}

defineEmits(['remove-todo'])
const { todo } = defineProps<Props>()

const rename = ref<boolean>(false)
const inputValue = ref<string>('')

function toggleRename(newTitle?: string): void {
	rename.value = !rename.value

	if (newTitle) {
		todo.title = newTitle.trim()
	}
}

function onChange() {
	todo.completed = !todo.completed
}
</script>

<template>
	<li
		:key="todo.id"
		class="border-violet border-t first:border-none px-4 py-6 flex items-center justify-between h-24 group"
	>
		<div class="flex items-center space-x-4 mr-5 cursor-pointer">
			<Checkbox
				v-if="!rename"
				:id="todo.id"
				:title="todo.title"
				:completed="todo.completed"
				@onChange="onChange"
			/>

			<label
				class="flex items-center justify-between space-x-3"
				:for="`todo-${todo.id}`"
				v-else
			>
				<input
					:id="`todo-${todo.id}`"
					type="text"
					placeholder="Enter new title"
					class="pl-3 py-2 pr-3 bg-white border-violet dark:border-grey dark:bg-mainBlack border-2 focus:!border-violet transition-colors duration-300 rounded-md max-w-32 sm:max-w-max"
					@keydown.enter="toggleRename(inputValue.trim())"
					v-model="inputValue"
				/>

				<IconButton title="apply btn" @click="toggleRename(inputValue.trim())">
					<CheckIcon />
				</IconButton>
			</label>
		</div>

		<div
			class="lg:opacity-0 flex transition-opacity duration-300 items-center space-x-2 group-hover:opacity-100"
		>
			<IconButton title="rename btn" @click="toggleRename()">
				<EditIcon
					v-if="!rename"
					class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>

				<XIcon
					v-else
					classInner="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>
			</IconButton>

			<IconButton title="remove btn" @click="$emit('remove-todo', todo.id)">
				<TrashIcon
					classInner="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>
			</IconButton>
		</div>
	</li>
</template>
