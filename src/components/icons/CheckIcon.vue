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
			:class="classInner"
			d="M4.99805 14.6488L3.59769 16.0767L5.02563 17.4771L6.42599 16.0492L4.99805 14.6488ZM6.3984 13.2209L1.40062 8.31963L-1.40009 11.1755L3.59769 16.0767L6.3984 13.2209ZM13.1294 3.50089L3.57011 13.2484L6.42599 16.0492L15.9852 6.3016L13.1294 3.50089Z"
			fill="#F7F7F7"
			mask="url(#path-1-inside-1_636_603)"
		/>
	</svg>
</template>
