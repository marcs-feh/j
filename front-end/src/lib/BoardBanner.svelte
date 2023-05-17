<script lang="ts">
	export let title : string;
	export let imagePath : string;
	export let textColor : string;

</script>

<main>
	<div class="banner">
		<div class="board-title" style={'color:' + textColor}> {title} </div>
		<img class="banner-pic" src={imagePath} alt="Board Banner">
	</div>
</main>

<style>
	.banner {
		position: relative;
		margin: 0.4rem;
	}
	.board-title {
		position: absolute;
		font-family: monospace;
		font-size: 2rem;
		top: .2em;
		left: .3em;
	}
	.banner-pic {
		object-fit: cover;
		width: 100%;
		max-height: 90px;
	}
</style>
