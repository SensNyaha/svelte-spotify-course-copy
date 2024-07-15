<h1>Hello KITTY</h1>
<button>DSAD</button>

<style lang="scss">
	@use 'src/styles/functions';
	@use '@unsass/breakpoint';

	h1 {
		color: red;
		font-size: functions.toRem(36);
		@include breakpoint.up('md') {
			color: green;
		}
		@include breakpoint.up('lg') {
			color: blue;
		}
	}
</style>
