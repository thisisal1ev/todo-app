<template>
	<div v-if="modal" class="overlay">
		<div
			@keydown.esc="close"
			@click.stop
			class="mx-10 md:max-w-[500px] w-full py-[18px] border-transparent px-8 bg-white dark:bg-mainBlack rounded-lg border dark:border-grey transition-colors duration-300 flex flex-col"
			tabindex="0"
		>
			<div class="grow h-auto mb-40">
				<h3
					class="uppercase mb-6 font-medium text-2xl leading-6 text-center text-black dark:text-white"
				>
					New note
				</h3>
				<input
					type="text"
					placeholder="Input your note..."
					class="py-2 pl-4 rounded-md placeholder:dark:text-[#666] bg-transparent border-2 w-full pr-4 border-violet dark:border-grey transition-colors duration-300 placeholder:select-none focus:dark:border-violet"
				/>
			</div>
			<div class="flex items-center justify-between space-x-3">
				<button
					class="uppercase font-medium text-lg leading-[18px] py-2 px-5 border border-violet rounded-md bg-white dark:bg-mainBlack text-violet hover:text-white hover:!bg-violet transition-colors duration-300"
					@click="close"
				>
					Cancel
				</button>
				<button
					class="uppercase font-medium text-lg leading-[18px] py-2 px-5 border border-violet rounded-md text-white bg-violet hover:text-violet hover:!bg-white transition-colors duration-300"
				>
					Apply
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
	modalProps: {
		type: Boolean,
		default: true,
		required: true,
	},
})

const modal = props.modalProps

const emit = defineEmits(['close'])

function close() {
	emit('close')
}
</script>
