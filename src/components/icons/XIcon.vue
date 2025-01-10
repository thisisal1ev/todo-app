<script lang="ts" setup>
interface Props {
	classBody?: string
	classInner?: string
}

defineProps<Props>()
</script>

<template>
	<svg
		:class="classBody"
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path :class="classInner" d="M18 6 6 18" />
		<path :class="classInner" d="m6 6 12 12" />
	</svg>
</template>
