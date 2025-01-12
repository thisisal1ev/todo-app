<script lang="ts" setup>
import { CheckIcon } from './icons'

interface Props {
	id: number
	completed: boolean
	title: string
}

defineProps<Props>()
defineEmits(['onChange'])
</script>

<template>
	<label class="flex items-center relative space-x-3" :for="`todo-${id}`">
		<input
			type="checkbox"
			class="before:content[''] relative cursor-pointer appearance-none border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet checked:bg-violet checked:before:bg-violet hover:before:opacity-10 accent-violet p-1 outline-none w-6 h-6 rounded-sm border-violet peer"
			@change="$emit('onChange')"
			:checked="completed"
			:id="`todo-${id}`"
		/>

		<span
			class="absolute text-white transition-opacity opacity-0 pointer-events-none -translate-x-2/4 top-[5px] peer-checked:opacity-100"
		>
			<CheckIcon />
		</span>

		<span
			class="inline-block font-medium text-sm sm:text-base lg:text-xl leading-5 peer-checked:line-through text-black dark:text-white transition-colors duration-300"
		>
			{{ title }}
		</span>
	</label>
</template>
