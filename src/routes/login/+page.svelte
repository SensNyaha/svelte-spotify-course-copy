<script>
	import Button from '$components/Button.svelte';
	import logo from '$assets/Spotify_Logo.png';
	import cover from '$assets/Album_Logo.png';
</script>

<div class="wrapper">
	<div class="content">
		<img src={logo} alt="Spotify Logo" class="logo" style="width: 400px" />
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
	<div class="cover"></div>
</div>
