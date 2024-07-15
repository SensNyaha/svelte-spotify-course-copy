import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SPOTIFY_CLIENT_ID, BASE_URL } from '$env/static/private';
import pkce from 'pkce-gen';

const generateRandomString = (length: number) => {
	let randomString = '';
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}

	return randomString;
};

const state = generateRandomString(16);
const challenge = pkce.create();

export const GET: RequestHandler = ({ cookies }) => {
	cookies.set('spotify_auth_state', state, { path: '/' });
	cookies.set('spotify_auth_challenge_verifier', challenge.code_verifier, { path: '/' });
	throw redirect(
		307,
		`https://accounts.spotify.com/authorize?${new URLSearchParams({
			response_type: 'code',
			client_id: SPOTIFY_CLIENT_ID,
			scope:
				'ugc-image-upload user-modify-playback-state user-read-playback-state \n' +
				'user-read-currently-playing user-follow-modify user-follow-read \n' +
				'user-read-recently-played user-read-playback-position user-top-read \n' +
				'playlist-read-collaborative playlist-modify-public playlist-read-private \n' +
				'playlist-modify-private app-remote-control streaming user-read-email user-read-private \n' +
				'user-library-modify user-library-read',
			redirect_uri: `${BASE_URL}/api/auth/callback`,
			state,
			code_challenge_method: 'S256',
			code_challenge: challenge.code_challenge
		})}`
	);
};
