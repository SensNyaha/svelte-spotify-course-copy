<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { Home, ListMusic, Search, type Icon } from 'lucide-svelte';
	import logo from '$assets/Spotify_Logo.png';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import { page } from '$app/stores';

	export let isMobileMenuShowed: boolean = false;

	const menuItems: { path: string; name: string; icon: ComponentType<Icon> }[] = [
		{
			path: '/',
			name: 'Home',
			icon: Home
		},
		{
			path: '/search',
			name: 'Search',
			icon: Search
		},
		{
			path: '/playlists',
			name: 'Playlists',
			icon: ListMusic
		}
	];
</script>

<div
	class="nav-content-overlay"
	style:left={isMobileMenuShowed ? 'calc(var(--sidebar-width))' : '100%'}
	on:click={() => dispatch('close-menu')}
></div>
<div class="nav-content" class:isMobileMenuShowed>
	<nav aria-label="Main">
		<div class="nav-content-inner">
			<button class="nav-close" on:click={() => dispatch('close-menu')}>&times;</button>
			<img src={logo} alt="Spotify Logo" class="logo" width="100px" />
			<ul>
				{#each menuItems as item, index (item.path)}
					<li class:active={item.path === $page.url.pathname}>
						<a href={item.path}>
							<svelte:component
								this={item.icon}
								focusable="false"
								aria-hidden="true"
								color="var(--text-color)"
								size={26}
								strokeWidth={2}
							/>
							{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<style lang="scss">
	@use 'src/styles/functions';
	@use '@unsass/breakpoint';

	.nav-content-overlay {
		transition: all 0.5s;

		position: absolute;
		top: 0;
		left: 100%;
		right: 0;
		bottom: 0;
		z-index: 10;
		overflow: hidden;
		background-color: rgba(165, 165, 165, 0.3);
	}
	.nav-content {
		transition: all 0.5s;
		position: sticky;
		z-index: 999;
		.logo {
			max-width: 100%;
			width: 130px;
		}

		.nav-content-inner {
			position: relative;
			z-index: 20;
			padding: 20px;
			min-width: var(--sidebar-width);
			background-color: var(--sidebar-color);
			height: 100vh;
			overflow: auto;
			//display: none;
			.nav-close {
				position: absolute;
				top: 10px;
				right: 10px;
				background-color: transparent;
				outline: none;
				color: var(--text-color);
				font-size: 30px;
				border: none;
				cursor: pointer;
				opacity: 0.8;
				&:hover {
					opacity: 1;
				}
				@include breakpoint.up('md') {
					display: none;
				}
			}

			ul {
				padding: 0;
				margin: 20px 0 0;
				list-style: none;

				li {
					&.active {
						a {
							opacity: 1;
						}
					}

					a {
						display: flex;
						align-items: center;
						text-decoration: none;
						color: var(--text-color);
						font-size: functions.toRem(14);
						font-weight: 500;
						padding: 5px;
						margin: 10px 0;
						opacity: 0.7;
						transition: opacity 0.5s;

						&:hover,
						&:focus {
							opacity: 1;
						}

						:global(svg) {
							margin-right: 12px;
						}
					}
				}
			}
		}

		@include breakpoint.up('md') {
			position: sticky;
			top: 0;
			margin-left: 0;

			.nav-content-inner {
				display: block;
			}
		}

		margin-left: calc(-1 * var(--sidebar-width));

		&.isMobileMenuShowed {
			transform: translateX(100%);
			.nav-content-inner {
				display: block;
			}
		}
	}
</style>
