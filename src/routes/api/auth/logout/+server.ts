import type { RequestHandler } from './$types';
import { redirect, json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies, url, request }) => {
	cookies.delete('refresh_token', { path: '/' });
	cookies.delete('access_token', { path: '/' });

	if (request.headers.get('accept') === 'application/json') return json({ success: true });

	throw redirect(307, url.searchParams.get('redirectTo') || '/');
};
