<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '/src/styles/main.scss';
	import type { LayoutData } from '../../.svelte-kit/types/src/routes/$types';
	import Navigation from '$components/Navigation.svelte';
	import QuickNavigationControl from '$components/QuickNavigationControl.svelte';
	import { Menu } from 'lucide-svelte';

	let headerBg: HTMLElement;
	let scrollY: number;

	$: if (headerBg) headerBg.style.opacity = scrollY / headerBg.offsetHeight + '';

	let isMobileMenuShowed: boolean = false;

	export let data: LayoutData;
</script>

<!--{#if data.user}-->
<!--	You are logged by {data.user?.display_name}-->
<!--	<LogoutForm {data} />-->
<!--{/if}-->

<svelte:window bind:scrollY />

<div id="main">
	{#if data.user}
		<div id="sidebar">
			<Navigation {isMobileMenuShowed} on:close-menu={() => (isMobileMenuShowed = false)} />
		</div>
	{/if}
	<div id="content">
		<header id="header">
			<div
				class="header-bg"
				style:background-color="var(--header-color)"
				bind:this={headerBg}
			/>
			<button
				class="header-burger"
				on:click={() => (isMobileMenuShowed = !isMobileMenuShowed)}
			>
				<Menu />
			</button>
			<div class="header-controls">
				<QuickNavigationControl direction="back" />
				<QuickNavigationControl direction="forward" />
			</div>
		</header>
		<main id="main-content" class:user-logged={data.user}>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	@use 'src/styles/functions';
	@use '@unsass/breakpoint';

	#main {
		display: flex;

		#content {
			flex: 1;
			height: 99999px;

			header#header {
				position: sticky;
				height: var(--header-height);
				padding: 0 15px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				top: 0;
				left: 0;
				width: 100%;
				z-index: 100;

				@include breakpoint.up('md') {
					padding: 0 30px;
				}

				.header-bg {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: -1;
				}
				.header-burger {
					display: flex;
					justify-content: center;
					align-items: center;
					color: var(--text-color);
					border: none;
					cursor: pointer;
					background-color: transparent;
					opacity: 0.8;
					&:hover {
						opacity: 1;
					}
					max-width: 50px;
					max-height: 50px;
					transition: all 0.5s;
					@include breakpoint.up('md') {
						max-width: 0;
						max-height: 0;
						overflow: hidden;
						margin-left: -20px;
					}
				}
				.header-controls {
					margin-right: auto;
					display: flex;
					align-items: center;
					gap: 10px;
				}
			}

			main#main-content {
				padding: 30px 15px 60px;
				//width: calc(100% - var(--sidebar-width));
				@include breakpoint.up('md') {
					padding: 30px 30px 60px;
				}
				&.user-logged {
					margin-top: var(--header-height);
				}
			}
		}
	}
</style>
