<script lang="ts">
	export let contents : string;
	// export let anchorURL : string;
	export let authorName : string;
	export let imagePath : string;
	export let timestamp : string;

</script>

<main>
	<div class="post">
		<!--- TODO: Add like dislike ratio --->
		<!--- TODO: Prettier timestamp --->
		<div class="post-picture" >
			<img src={imagePath} alt="Post" />
		</div>
		<div class="post-contents">
			<span class="post-info">Posted by: {authorName} @ {timestamp} </span>
			<p> {contents} </p>
		</div>
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
	.post-info {
		font-size: 0.8rem;
	}
	.post-contents {
		font-family: sans-serif;
		font-size: 1rem;
	}
</style>
