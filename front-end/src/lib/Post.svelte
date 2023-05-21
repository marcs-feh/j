<script lang="ts">
	export let contents : string;
	// export let anchorURL : string;
	export let imagePath : string;
</script>

<main>
	<div class="post">
		<!--- TODO: Add like dislike ratio --->
		<div class="post-picture" >
			<img src={imagePath} alt="Post" />
		</div>
		<p class="post-contents"> {contents} </p>
	</div>
</main>

<style>
	.post {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
	.post-picture {
		margin-right: 16px;
	}
	.post-picture > img {
		max-width: 100%;
	}
	.post-contents {
		font-family: sans-serif;
		font-size: 1rem;
	}
</style>
