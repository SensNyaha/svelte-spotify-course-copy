<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '/src/styles/main.scss';
	import type { LayoutData } from '../../.svelte-kit/types/src/routes/$types';
	import Navigation from '$components/Navigation.svelte';

	let isDesktop: boolean = true;

	export let data: LayoutData;
</script>

<!--{#if data.user}-->
<!--	You are logged by {data.user?.display_name}-->
<!--	<LogoutForm {data} />-->
<!--{/if}-->

<div id="main">
	{#if data.user}
		<div id="sidebar">
			<Navigation {isDesktop} />
		</div>
	{/if}
	<div id="content">
		<main id="main-content">
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

			main#main-content {
				padding: 30px 15px 60px;
				@include breakpoint.up('md') {
					padding: 30px 30px 60px;
				}
			}
		}
	}
</style>
