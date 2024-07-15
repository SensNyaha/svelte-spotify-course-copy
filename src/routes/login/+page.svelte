<script>
	import Button from '$components/Button.svelte';
	import logo from '$assets/Spotify_Logo.png';
	import cover from '$assets/Album_Logo.png';
</script>

<div class="wrapper">
	<div class="content">
		<img src={logo} alt="Spotify Logo" class="logo" />
		<h1>Заплати 0.00 за 3 месяца Premium</h1>
		<p>
			Наслаждайся прослушиванием музыки без рекламы, оффлайн треками и многим другим. Отменить
			можно в любой момент
		</p>
		<div class="actions">
			<Button
				element="a"
				variant="outline"
				href="https://www.spotify.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				SIGN UP
			</Button>
			<Button element="a" href="/api/auth/login">LOG IN</Button>
		</div>
	</div>
	<div class="cover">
		<img src={cover} alt="album cover" class="cover" />
	</div>
</div>

<style lang="scss">
	@use 'src/styles/functions';
	@use '@unsass/breakpoint';

	:global(body) {
		background-image: linear-gradient(230deg, var(--sidebar-color), var(--bg-color));
		height: 100vh;
	}

	.wrapper {
		display: flex;
		width: 100%;
		max-width: 1200px;
		margin: 80px auto 0;
		align-items: center;
		flex-direction: column;
		@include breakpoint.up('md') {
			flex-direction: row;
		}
	}

	.cover {
		flex: 1;
		margin-top: 20px;
		@include breakpoint.up('md') {
			margin-left: 20px;
			margin-top: 0;
		}

		img {
			max-width: 100%;
		}
	}

	.content {
		.logo {
			width: 170px;
			max-width: 100%;
			margin-bottom: 30px;
		}

		flex: 1.8;

		.actions {
			margin-top: 40px;

			:global(.button) {
				margin-right: 10px;
				padding: 10px 20px;
			}
		}

		h1 {
			font-size: functions.toRem(40);
		}

		p {
			font-size: functions.toRem(20);
		}
	}
</style>
