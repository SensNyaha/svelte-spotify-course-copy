<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '/src/styles/main.scss';
	import type { LayoutData } from '../../.svelte-kit/types/src/routes/$types';

	import LogoutForm from '$components/LogoutForm.svelte';

	export let data: LayoutData;
</script>

{#if data.user}
	You are logged by {data.user?.display_name}
	<LogoutForm {data} />
{/if}

<div id="main">
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
		#content {
			main#main-content {
				padding: 30px 15px 60px;
				@include breakpoint.up('md') {
					padding: 30px 30px 60px;
				}
			}
		}
	}
</style>
