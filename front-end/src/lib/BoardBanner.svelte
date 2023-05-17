<script lang="ts">
	export let title : string;
	export let imagePath : string;
</script>

<main>
	<div class="banner">
		<p class="board-title"> {title} </p>
		<img src={imagePath} alt="Board Banner">
	</div>
</main>

<style></style>
