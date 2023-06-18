<script>
	import Post from '$lib/Post.svelte';
	import { composeImageURL } from '../../../../../utils';
	import { PB_URL, currentUser } from '../../../../../globals';
	import PostButton from '$lib/PostButton.svelte';

	export let data;
	const p = data.post
	console.table(data.replies)
</script>

<main>
		<Post
			imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
			contents={p.contents}
			authorName={p.expand.author.username}
			timestamp={p.created.slice(0, p.created.length - 8)}
			boardName={data.boardName}
			postId={p.id}
		/>
		{#if $currentUser}
		<PostButton title={"Reply to Post"} ref={`/boards/${data.boardName}/reply/${data.post.id}`} />
		{:else}
		<PostButton title={"Login"} ref={`/login`} />
		{/if}
		
		<h2>
		Replies:
		</h2>
		{#each data.replies as rep}
		<ol>
		<li> {rep.contents} </li>
		</ol>

		{/each}
</main>

<style>
</style>
