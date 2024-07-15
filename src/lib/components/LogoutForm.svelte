<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { LayoutData } from '../../../.svelte-kit/types/src/routes/$types';

	export let data: LayoutData;
</script>

<form
	method="POST"
	action="/api/auth/logout?redirectTo={data?.url?.pathname}"
	on:submit|preventDefault={async () => {
		const response = await fetch(`/api/auth/logout?redirectTo=${data?.url?.pathname}`, {
			method: 'POST',
			headers: {
				accept: 'application/json'
			}
		});
		if (response.ok) await invalidateAll();
	}}
>
	<!--	На случай, если потребуется работа формы через JS, добавлен on:submit обработчик	-->
	<button>DO YOU WANNA LOGOUT?</button>
</form>
