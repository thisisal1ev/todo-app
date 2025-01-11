<script lang="ts" setup>
import { Todo } from '../App.vue'
import { ref, watch } from 'vue'
import { CheckIcon, EditIcon, TrashIcon, XIcon } from './icons'

interface Props {
	todo: Todo
}

defineEmits(['remove-todo'])
defineProps<Props>()
const rename = ref<boolean>(false)
const inputValue = ref<string>('')

watch(inputValue, newValue => {
	inputValue.value = newValue
})

const toggleRename = (): void => {
	rename.value = !rename.value
}
</script>

<template>
	<li
		:key="todo.id"
		@click="rename = false"
		class="border-violet border-t first:border-none px-4 py-6 flex items-center justify-between h-24 group"
	>
		<div class="flex items-center space-x-4 mr-5 cursor-pointer">
			<label
				v-if="!rename"
				class="flex items-center relative space-x-3"
				:for="`todo-${todo.id}`"
			>
				<input
					type="checkbox"
					class="before:content[''] relative cursor-pointer appearance-none border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet checked:bg-violet checked:before:bg-violet hover:before:opacity-10 accent-violet p-1 outline-none w-6 h-6 rounded-sm border-violet peer"
					@change="todo.completed = !todo.completed"
					:checked="todo.completed"
					:id="`todo-${todo.id}`"
				/>

				<span
					class="absolute text-white transition-opacity opacity-0 pointer-events-none -translate-x-2/4 top-1 peer-checked:opacity-100"
				>
					<CheckIcon />
				</span>

				<span
					class="inline-block font-medium text-sm sm:text-base lg:text-xl leading-5 peer-checked:line-through text-black dark:text-white transition-colors duration-300"
				>
					{{ todo.title }}
				</span>
			</label>

			<label
				class="flex items-center justify-between space-x-3"
				:for="'todo-' + todo.id"
				@click.stop
				v-else
			>
				<input
					:id="`todo-${todo.id}`"
					type="text"
					placeholder="Enter new title"
					class="pl-3 py-2 pr-3 bg-white border-violet dark:border-grey dark:bg-mainBlack border-2 focus:!border-violet transition-colors duration-300 rounded-md max-w-32 sm:max-w-max"
					@keydown.enter=";(todo.title = inputValue.trim()), (rename = !rename)"
					v-model="inputValue"
				/>

				<button
					title="apply btn"
					class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex justify-center items-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
					@click=";(todo.title = inputValue), (rename = !rename)"
				>
					<CheckIcon />
				</button>
			</label>
		</div>

		<div
			class="lg:opacity-0 flex transition-opacity duration-300 items-center space-x-2 group-hover:opacity-100"
		>
			<button
				title="rename btn"
				class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex justify-center items-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
				@click.stop="toggleRename"
			>
				<EditIcon
					v-if="!rename"
					class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>

				<XIcon
					v-else
					classInner="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>
			</button>

			<button
				title="remove btn"
				class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex items-center justify-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
				@click="$emit('remove-todo', todo.id)"
			>
				<TrashIcon
					classInner="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
				/>
			</button>
		</div>
	</li>
</template>
