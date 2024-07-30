<template>
	<div :class="{ overlay: openModal }"></div>
</template>

<script setup>
import { defineProps } from 'vue'

const openModal = defineProps({
	openModal: {
		type: Boolean,
		required: true,
	},
})
</script>
