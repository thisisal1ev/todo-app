<template>
	<li
		v-for="(value, key, index) in todo"
		:key="index"
		class="border-violet border-t first:border-none px-4 py-6 flex items-center justify-between group"
	>
		<div class="flex items-center space-x-4 mr-5 cursor-pointer">
			<label
				class="flex items-center relative space-x-3"
				:for="'todo-' + value.id"
			>
				<input
					type="checkbox"
					class="before:content[''] relative cursor-pointer appearance-none border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet checked:bg-violet checked:before:bg-violet hover:before:opacity-10 accent-violet p-1 outline-none w-6 h-6 rounded-sm border-violet peer"
					@change="value.completed = !value.completed"
					:checked="value.completed"
					:id="'todo-' + value.id"
				/>
				<span
					class="absolute text-white transition-opacity opacity-0 pointer-events-none -translate-x-2/4 top-1 peer-checked:opacity-100"
				>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask id="path-1-inside-1_636_603" fill="white">
							<path
								d="M4.99805 14.6488L0.000261426 9.74757L9.55951 9.85688e-06L14.5573 4.90125L4.99805 14.6488Z"
							/>
						</mask>
						<path
							d="M4.99805 14.6488L3.59769 16.0767L5.02563 17.4771L6.42599 16.0492L4.99805 14.6488ZM6.3984 13.2209L1.40062 8.31963L-1.40009 11.1755L3.59769 16.0767L6.3984 13.2209ZM13.1294 3.50089L3.57011 13.2484L6.42599 16.0492L15.9852 6.3016L13.1294 3.50089Z"
							fill="#F7F7F7"
							mask="url(#path-1-inside-1_636_603)"
						/>
					</svg>
				</span>
				<span
					class="font-medium text-xl leading-5 peer-checked:line-through text-black dark:text-white transition-colors duration-300"
				>
					{{ value.title }}
				</span>
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
						class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
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
						class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						d="M3.87463 7.61505C3.80761 6.74386 4.49644 6 5.3702 6H12.6305C13.5044 6 14.1932 6.74385 14.1262 7.61505L13.6069 14.365C13.5468 15.1465 12.8951 15.75 12.1113 15.75H5.88943C5.10563 15.75 4.45397 15.1465 4.39385 14.365L3.87463 7.61505Z"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						d="M14.625 3.75H3.375"
						stroke-linecap="round"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						d="M10.5 9V12.75"
						stroke-linecap="round"
					/>
					<path
						class="dark:stroke-[#f7f7f7] stroke-black transition-colors duration-300"
						d="M7.5 9V12.75"
						stroke-linecap="round"
					/>
				</svg>
			</button>
		</div>
	</li>
</template>

<script setup>
import { defineProps } from 'vue'

const todo = defineProps({
	todo: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['remove-todo'])

const removeTodo = () => {
	emit('remove-todo', todo.id)
}
</script>
