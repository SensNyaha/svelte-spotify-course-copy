import type { LayoutServerLoad } from '../../.svelte-kit/types/src/routes/$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies, fetch, url }) => {
	const accessToken = cookies.get('access_token');

	if (!accessToken) {
		return {
			user: null
		};
	}

	const profileRes = await fetch(`${SPOTIFY_BASE_URL}/me`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});

	if (profileRes.ok) {
		const user: SpotifyApi.CurrentUsersProfileResponse = await profileRes.json();
		return {
			user
		};
	}

	if (profileRes.status === 401 && cookies.get('refresh_token')) {
		const refreshRes = await fetch('/api/auth/refresh');
		if (refreshRes.ok) {
			throw redirect(307, url.pathname);
		}
		return {
			user: null
		};
	}

	return {
		user: null
	};
};
