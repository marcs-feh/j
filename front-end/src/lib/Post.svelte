<script lang="ts">
	export let contents : string;
	export let authorName : string;
	export let imagePath : string | null;
	export let timestamp : string;
	export let boardName : string;
	export let postId : string;
	export let gotoButton : bool;

</script>

<main>
	<div class="post">
		<!--- TODO: Add like Count --->
		<div class="post-picture" >
			<img src={imagePath} alt="Post" />
		</div>
		<div class="content-area">
			<div class="post-contents">
				<span class="post-info">Posted by: <a href="/user/{authorName}">{authorName}</a> @ {timestamp} </span>

				{#if gotoButton}
					<a class="view-post"
						href={`/boards/${boardName}/view/${postId}`}>
						<i>Go to Post</i>
					</a>
				{/if}
				<p> {contents} </p>
			</div>
		</div>
	</div>

</main>

<style>
	img {
		display: block;
		width: auto;
		height: auto;
		max-height: 200px;
	}
	.post {
		display: grid;
		grid-template-columns: 1fr 2fr;
		margin: 1rem;
		max-height: 200px;
		margin-bottom: 1rem;
		overflow:auto;
	}
	.post-picture {
		margin-right: 16px;
	}
	/* .post-picture > img { */
	/* 	max-width: 100%; */
	/* } */
	.post-info {
		font-size: 0.8rem;
	}

	.post-contents {
		font-family: sans-serif;
		font-size: 1rem;
		max-height: 200px;
		overflow-y:auto;
		white-space: pre-line;

	}

	.view-post {
		font-size: 0.8rem;
		background: transparent;
		border-radius: 0.2rem;
		border-width: 0.01rem;
		padding: 0.2rem 0.1rem 0.2rem 0.1rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		color: #dcdcdc;
	}

	.view-post:hover {
		color: lime;
	}
</style>
