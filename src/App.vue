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
					<svg
						class="absolute right-4 top-2 transition-colors duration-300"
						width="21"
						height="22"
						viewBox="0 0 21 22"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="fill-violet dark:fill-grey group-focus-within:fill-violet transition-colors duration-300"
							d="M20.7773 20.184L15.9056 15.312H15.8531C17.3547 13.5415 18.1136 11.2588 17.9709 8.94156C17.8282 6.62433 16.7951 4.45202 15.0876 2.87905C13.3801 1.30608 11.1306 0.454303 8.80958 0.501892C6.48855 0.549481 4.27583 1.49275 2.63427 3.13439C0.992706 4.77602 0.0494786 6.98885 0.00189181 9.30999C-0.045695 11.6311 0.806045 13.8808 2.37894 15.5883C3.95184 17.2958 6.12404 18.329 8.44117 18.4717C10.7583 18.6144 13.0408 17.8555 14.8113 16.3539C14.8113 16.3539 14.8113 16.3914 14.8113 16.4063L19.6831 21.2783C19.7527 21.3485 19.8356 21.4043 19.927 21.4424C20.0183 21.4804 20.1163 21.5 20.2152 21.5C20.3141 21.5 20.4121 21.4804 20.5034 21.4424C20.5948 21.4043 20.6777 21.3485 20.7473 21.2783C20.8242 21.2103 20.8862 21.1272 20.9296 21.0342C20.9731 20.9412 20.9969 20.8402 20.9997 20.7376C21.0025 20.635 20.9842 20.533 20.946 20.4377C20.9077 20.3425 20.8503 20.2561 20.7773 20.184ZM9.00276 16.9685C7.5204 16.9685 6.07133 16.5289 4.83879 15.7053C3.60625 14.8817 2.64561 13.7111 2.07833 12.3415C1.51106 10.9719 1.36263 9.46488 1.65183 8.01094C1.94102 6.55699 2.65485 5.22146 3.70303 4.17322C4.75122 3.12499 6.08669 2.41113 7.54057 2.12192C8.99445 1.83272 10.5014 1.98115 11.871 2.54845C13.2405 3.11575 14.411 4.07644 15.2346 5.30904C16.0581 6.54163 16.4977 7.99077 16.4977 9.4732C16.4977 10.4575 16.3038 11.4322 15.9272 12.3415C15.5505 13.2509 14.9985 14.0772 14.3025 14.7732C13.6065 15.4692 12.7803 16.0213 11.871 16.3979C10.9616 16.7746 9.98701 16.9685 9.00276 16.9685Z"
						/>
					</svg>
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
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							v-if="isDarkMode"
						>
							<path
								class="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.1576 1.15764C12.1576 0.518299 11.6394 0 11 0C10.3606 0 9.84235 0.518299 9.84235 1.15764V1.73887C9.84235 2.37822 10.3606 2.89651 11 2.89651C11.6394 2.89651 12.1576 2.37822 12.1576 1.73887V1.15764ZM18.7782 4.85893C19.2302 4.40683 19.2302 3.67386 18.7782 3.22177C18.3261 2.76969 17.5931 2.76969 17.141 3.22177L16.73 3.63282C16.2779 4.08492 16.2779 4.81789 16.73 5.26998C17.182 5.72206 17.915 5.72206 18.3671 5.26998L18.7782 4.85893ZM4.85889 3.22184C4.40681 2.76976 3.67383 2.76976 3.22175 3.22184C2.76967 3.67393 2.76967 4.4069 3.22175 4.859L3.63273 5.26998C4.08483 5.72206 4.8178 5.72206 5.26989 5.26998C5.72197 4.81789 5.72197 4.08492 5.26989 3.63282L4.85889 3.22184ZM1.15764 9.84235C0.518299 9.84235 0 10.3606 0 11C0 11.6394 0.518299 12.1576 1.15764 12.1576H1.73884C2.37819 12.1576 2.89648 11.6394 2.89648 11C2.89648 10.3606 2.37819 9.84235 1.73884 9.84235H1.15764ZM20.2611 9.84235C19.6217 9.84235 19.1035 10.3606 19.1035 11C19.1035 11.6394 19.6217 12.1576 20.2611 12.1576H20.8424C21.4817 12.1576 22 11.6394 22 11C22 10.3606 21.4817 9.84235 20.8424 9.84235H20.2611ZM5.26989 18.3672C5.72197 17.9151 5.72197 17.1821 5.26989 16.7301C4.8178 16.2779 4.08483 16.2779 3.63273 16.7301L3.22177 17.141C2.76968 17.5931 2.76968 18.3261 3.22176 18.7782C3.67385 19.2302 4.40682 19.2302 4.85892 18.7782L5.26989 18.3672ZM18.3671 16.7301C17.915 16.2779 17.182 16.2779 16.73 16.7301C16.2779 17.1821 16.2779 17.9151 16.73 18.3672L17.1409 18.7782C17.5931 19.2303 18.326 19.2303 18.7782 18.7782C19.2302 18.3261 19.2302 17.5932 18.7782 17.141L18.3671 16.7301ZM12.1576 20.2611C12.1576 19.6217 11.6394 19.1035 11 19.1035C10.3606 19.1035 9.84235 19.6217 9.84235 20.2611V20.8424C9.84235 21.4817 10.3606 22 11 22C11.6394 22 12.1576 21.4817 12.1576 20.8424V20.2611ZM6.36943 11C6.36943 8.4426 8.4426 6.36943 11 6.36943C13.5573 6.36943 15.6305 8.4426 15.6305 11C15.6305 13.5573 13.5573 15.6305 11 15.6305C8.4426 15.6305 6.36943 13.5573 6.36943 11ZM11 4.05415C7.1639 4.05415 4.05415 7.1639 4.05415 11C4.05415 14.8361 7.1639 17.9458 11 17.9458C14.8361 17.9458 17.9458 14.8361 17.9458 11C17.9458 7.1639 14.8361 4.05415 11 4.05415Z"
							/>
						</svg>

						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							v-else
						>
							<path
								class="fill-[#F7F7F7] group-active:fill-violet"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11.1249
							0.548798C11.3387 0.917354 11.321 1.3762 11.0791 1.72705C10.3455
							2.79152 9.91599 4.08062 9.91599 5.47334C9.91599 9.12428 12.8757
							12.084 16.5266 12.084C17.9194 12.084 19.2085 11.6545 20.2729
							10.9208C20.6238 10.6791 21.0826 10.6613 21.4512 10.8751C21.8197
							11.089 22.0319 11.4962 21.9961 11.9208C21.5191 17.567 16.7867 22
							11.0178 22C4.93282 22 0 17.0672 0 10.9822C0 5.21328 4.43301
							0.480873 10.0792 0.00392422C10.5038 -0.0319387 10.911 0.180242
							11.1249 0.548798ZM8.17985 2.63461C4.70452 3.81573 2.20355 7.10732
							2.20355 10.9822C2.20355 15.8502 6.14981 19.7964 11.0178
							19.7964C14.8927 19.7964 18.1843 17.2955 19.3654 13.8202C18.4741
							14.1232 17.5191 14.2875 16.5266 14.2875C11.6587 14.2875 7.71244
							10.3413 7.71244 5.47334C7.71244 4.48086 7.87682 3.52582 8.17985
							2.63461Z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<Todos
				v-if="displayedTodos.length"
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
				:modalProps="modal"
				@addTodo="addTodo"
				@close="closeModal"
				@keydown.esc="closeModal"
				@click="closeModal"
			/>
		</div>
	</section>

	<button
		title="modal btn"
		class="bg-violet border-2 border-violet fixed bottom-8 right-8 md:right-20 lg:right-[12%] xl:right-[25%] p-3 rounded-full active:bg-grey transition-colors duration-300 outline-none group"
		@click="openModal"
		@keydown.esc="closeModal"
	>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.5 22.5C10.5 22.8978 10.658 23.2794 10.9393 23.5607C11.2206 23.842 11.6022 24 12 24C12.3978 24 12.7794 23.842 13.0607 23.5607C13.342 23.2794 13.5 22.8978 13.5 22.5V13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12C24 11.6022 23.842 11.2206 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5H13.5V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0C11.6022 0 11.2206 0.158035 10.9393 0.43934C10.658 0.720644 10.5 1.10218 10.5 1.5V10.5H1.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.5V22.5Z"
				fill="#f7f7f7"
				class="fill-[#f7f7f7] group-active:fill-violet transition-colors duration-300"
			/>
		</svg>
	</button>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import Modal from './components/Modal.vue'
import Todos from './components/Todos.vue'

let modal = ref(false)

const todos = ref([
	{ id: 1, title: 'Note #1', completed: false },
	{ id: 2, title: 'Note #2', completed: true },
	{ id: 3, title: 'Note #3', completed: false },
])

const searchQuery = ref('')
const selectedFilter = ref('all')

const displayedTodos = computed(() => {
	let filteredTodos = todos.value.filter(todo =>
		todo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
	)

	if (selectedFilter.value === 'completed') {
		filteredTodos = filteredTodos.filter(todo => todo.completed)
	} else if (selectedFilter.value === 'uncompleted') {
		filteredTodos = filteredTodos.filter(todo => !todo.completed)
	}

	return filteredTodos
})

watch([searchQuery, selectedFilter], () => {
	displayedTodos.value = displayedTodos.value
})

function getUserTheme() {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		return 'dark'
	}
	return 'light'
}

const userTheme = ref(getUserTheme())
const storedTheme = localStorage.getItem('theme')
const isDarkMode = ref(
	storedTheme ? storedTheme === 'dark' : userTheme.value === 'dark'
)

onMounted(() => {
	if (isDarkMode.value) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
})

const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value
	if (isDarkMode.value) {
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark')
	} else {
		document.documentElement.classList.remove('dark')
		localStorage.setItem('theme', 'light')
	}
}

function openModal() {
	modal.value = true
}

function closeModal() {
	modal.value = false
}

const removeTodo = function (id) {
	todos.value = todos.value.filter(t => t.id !== id)
}

function addTodo(todo) {
	todos.value.push(todo)
}

const focusInput = () => {
	if (inputRef.value) {
		inputRef.value.focus()
	}
}
</script>
