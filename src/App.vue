<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import {
	Modal,
	MoonIcon,
	PlusIcon,
	SearchIcon,
	SunIcon,
	Todos,
} from './components'

export interface Todo {
	id: number
	title: string
	completed: boolean
}

let modal = ref<boolean>(false)

const todos = ref<Todo[]>([
	{ id: 1, title: 'Note #1', completed: false },
	{ id: 2, title: 'Note #2', completed: true },
	{ id: 3, title: 'Note #3', completed: false },
])

const searchQuery = ref<string>('')
const selectedFilter = ref<string>('all')

const displayedTodos = computed<Todo[]>((): Todo[] => {
	let filteredTodos = todos.value.filter((todo: Todo) =>
		todo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
	)

	if (selectedFilter.value === 'completed') {
		filteredTodos = filteredTodos.filter(todo => todo.completed)
	} else if (selectedFilter.value === 'uncompleted') {
		filteredTodos = filteredTodos.filter(todo => !todo.completed)
	}

	return filteredTodos
})

function getUserTheme(): string {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		return 'dark'
	}
	return 'light'
}

const userTheme = ref<string>(getUserTheme())
const storedTheme: string | null = localStorage.getItem('theme')
const isDarkMode = ref<boolean>(
	storedTheme ? storedTheme === 'dark' : userTheme.value === 'dark'
)

onMounted(() => {
	if (isDarkMode.value) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
})

const toggleDarkMode = (): void => {
	isDarkMode.value = !isDarkMode.value
	if (isDarkMode.value) {
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark')
	} else {
		document.documentElement.classList.remove('dark')
		localStorage.setItem('theme', 'light')
	}
}

function openCloseModal(): void {
	modal.value = !modal.value
}

const removeTodo = function (id: number): void {
	todos.value = todos.value.filter(t => t.id !== id)
}

function addTodo(todo: Todo) {
	todos.value.push(todo)
}
</script>

<template>
	<section class="py-10">
		<div class="container">
			<h1
				class="pt-10 text-center uppercase font-medium text-[26px] leading-9 text-black dark:text-white transition-colors duration-300"
			>
				Todo list
			</h1>

			<div
				class="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between space-x-4 mt-4"
			>
				<label class="w-full relative group">
					<input
						class="relative w-full lg:w-full py-2 h-10 pl-4 pr-10 rounded-md outline-none bg-white border-2 border-violet dark:border-grey dark:bg-mainBlack placeholder:font-medium placeholder:text-base placeholder:leading-4 placeholder:text-[#C3C1E5] placeholder:dark:text-[#666] placeholder:select-none focus:dark:border-violet transition-colors duration-300"
						type="search"
						v-model="searchQuery"
						placeholder="Search note..."
					/>

					<SearchIcon
						classBody="absolute right-4 top-2 transition-colors duration-300"
						classInner="fill-violet dark:fill-grey group-focus-within:fill-violet transition-colors duration-300"
					/>
				</label>

				<div class="flex justify-between items-center space-x-5 lg:space-x-4">
					<select
						v-model="selectedFilter"
						class="rounded-md h-10 bg-violet text-grey px-2 py-1 lg:w-28 outline-none uppercase font-medium text-xs"
					>
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>

					<button
						title="toggle dark mode"
						class="rounded-md h-10 border-2 border-violet bg-violet p-2 active:bg-white transition-colors duration-300 group"
						@click="toggleDarkMode"
					>
						<SunIcon
							v-if="isDarkMode"
							classInner="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
						/>

						<MoonIcon
							v-else
							classInner="fill-[#F7F7F7] group-active:fill-violet"
						/>
					</button>
				</div>
			</div>

			<Todos
				v-if="displayedTodos.length >= 0"
				:todos="displayedTodos"
				@remove-todo="removeTodo"
			/>

			<div
				v-else
				class="flex items-center pt-10 flex-col select-none space-y-5"
			>
				<img
					v-if="isDarkMode"
					src="./assets/img/detective-dark.png"
					alt="detective"
					loading="lazy"
					width="200"
					height="170"
				/>

				<img
					v-else
					src="./assets/img/detective.png"
					alt="detective"
					loading="lazy"
					width="200"
					height="170"
				/>

				<p
					class="text-xl leading-5 font-normal text-center text-black dark:text-white transition-colors duration-300"
				>
					Empty...
				</p>
			</div>

			<Modal
				v-if="modal"
				@addTodo="addTodo"
				@toggleModal="openCloseModal"
				@keydown.esc="openCloseModal"
				@click="openCloseModal"
			/>
		</div>
	</section>

	<button
		title="modal btn"
		class="bg-violet border-2 border-violet fixed bottom-8 right-8 md:right-20 lg:right-[12%] xl:right-[25%] p-3 rounded-full active:bg-grey transition-colors duration-300 outline-none group"
		@click="openCloseModal"
		@keydown.esc="openCloseModal"
	>
		<PlusIcon
			classInner="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
		/>
	</button>
</template>
