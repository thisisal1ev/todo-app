<template>
	<li
		v-for="(value, key, index) in todo"
		:key="index"
		class="even:border-y even:last:border-t border-violet px-4 py-6 flex items-center justify-between group"
	>
		<div class="flex items-center space-x-2 mr-5">
			<input
				class="accent-violet p-1 outline-none w-6 h-6 rounded-sm border border-violet peer"
				type="checkbox"
				@change="value.completed = !value.completed"
				:checked="value.completed"
				:id="'todo-' + value.id"
			/>
			<label
				:for="'todo-' + value.id"
				class="font-medium text-xl leading-5 peer-checked:line-through"
			>
				{{ value.title }}
			</label>
		</div>

		<div
			class="lg:opacity-0 flex transition-opacity duration-300 items-center space-x-2 group-hover:opacity-100"
		>
			<button
				class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex justify-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black"
						d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736"
						stroke="#f7f7f7"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				class="p-2 rounded-full transition-colors duration-300 hover:dark:bg-slate-100/15 flex justify-center outline-none active:dark:bg-slate-100/30 hover:bg-black/15 active:bg-black/30"
				@click="$emit('remove-todo', value.id)"
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black"
						d="M3.87463 7.61505C3.80761 6.74386 4.49644 6 5.3702 6H12.6305C13.5044 6 14.1932 6.74385 14.1262 7.61505L13.6069 14.365C13.5468 15.1465 12.8951 15.75 12.1113 15.75H5.88943C5.10563 15.75 4.45397 15.1465 4.39385 14.365L3.87463 7.61505Z"
						stroke="#f7f7f7"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black"
						d="M14.625 3.75H3.375"
						stroke="#f7f7f7"
						stroke-linecap="round"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black"
						d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
						stroke="#f7f7f7"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black"
						d="M10.5 9V12.75"
						stroke="#f7f7f7"
						stroke-linecap="round"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black"
						d="M7.5 9V12.75"
						stroke="#f7f7f7"
						stroke-linecap="round"
					/>
				</svg>
			</button>
		</div>
	</li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const todo = defineProps({
	todo: {
		type: Object,
		required: true,
	},
})
</script>
