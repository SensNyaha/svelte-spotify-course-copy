import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = ({ url, data }) => {
	if (!data.user && url.pathname !== '/login') throw redirect(303, '/login');
	if (data.user && url.pathname === '/login') throw redirect(307, '/');

	// обязательно, если обрабатываем сначала через +layout.server.ts, то потом в +layout.ts возвращать то, что возвращал нам +layout.server.ts
	return {
		user: data.user,
		url
	};
};
