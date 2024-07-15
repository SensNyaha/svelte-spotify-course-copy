<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { Home, ListMusic, Search, type Icon } from 'lucide-svelte';
	import logo from '$assets/Spotify_Logo.png';

	import { page } from '$app/stores';

	export let isDesktop: boolean = false;

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

<div class="nav-content" class:isDesktop>
	<nav aria-label="Main">
		<div class="nav-content-inner">
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
