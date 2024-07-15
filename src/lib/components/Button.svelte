<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	// eslint-disable-next-line no-undef
	type Element = $$Generic<'button' | 'a'>;

	interface ButtonComponentElements {
		button: HTMLButtonAttributes;
		a: HTMLAnchorAttributes;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = ButtonComponentElements[Element] & {
		element: Element;
		variant?: 'outline' | 'solid' | 'danger';
		classname?: string;
	};
	export let element: Element;
	export let variant: 'outline' | 'solid' | 'danger' = 'solid';
	export let classname: string = '';
</script>

<svelte:element
	this={element}
	class={classname + ' button button-' + variant}
	on:click
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	@use 'src/styles/functions';
	@use '@unsass/breakpoint';

	.button {
		display: inline-block;
		border: none;
		font-weight: 600;
		font-size: functions.toRem(14);
		border-radius: 20px;
		cursor: pointer;
		padding: 7px 15px;
		text-decoration: none;

		&.button-solid {
			background-color: var(--accent-color);
			color: #000;
			border: 2px solid var(--accent-color);
		}

		&.button-outline {
			background-color: transparent;
			color: var(--text-color);
			border: 2px solid;
		}

		&.button-danger {
			background-color: var(--error);
			color: #fff;
			border: 2px solid var(--error);
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}

		&:hover {
			&.button-solid,
			&.button-danger {
				background-image: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
			}

			&.button-outline {
				background-image: radial-gradient(
					rgba(255, 255, 255, 0.1),
					rgba(255, 255, 255, 0.1)
				);
			}
		}

		&:active {
			&.button-solid,
			&.button-danger {
				background-image: radial-gradient(
					rgba(255, 255, 255, 0.1),
					rgba(255, 255, 255, 0.1)
				);
			}

			&.button-outline {
				background-image: radial-gradient(
					rgba(255, 255, 255, 0.2),
					rgba(255, 255, 255, 0.2)
				);
			}
		}
	}
</style>
