// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user: SpotifyApi.CurrentUsersProfileResponse | null;
			url: URL | null;
		}

		// interface PageState {}
		// interface Platform {}
	}
}

export {};
