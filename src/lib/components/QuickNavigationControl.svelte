<script lang="ts">
	export let direction: 'back' | 'forward';
	import { CircleChevronRight } from 'lucide-svelte';

	let active: boolean = true;
</script>

<div class="control-wrapper" class:back={direction === 'back'} class:active {...$$restProps} on:click>
	<CircleChevronRight />
</div>

<style lang="scss">
	.control-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.3;
		transition: all 0.3s;
		&.back {
			transform: rotateZ(180deg);
		}
		&.active {
			opacity: 0.8;
			cursor: pointer;
			&:hover,
			&:active,
			&:focus {
				opacity: 1;
			}
		}
	}
</style>
