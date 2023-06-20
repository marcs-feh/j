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
			gotoButton={false}
		/>
		{#if $currentUser}
		<PostButton title={"Reply to Post"} ref={`/boards/${data.boardName}/reply/${data.post.id}`} />
		{:else}
		<PostButton title={"Login"} ref={`/login`} />
		{/if}
		
		<h2>
		Replies:
		</h2>
		<!-- TODO: handle no image reply with placeholder! -->
		{#each data.replies as rep}
		<Post
			imagePath={composeImageURL(PB_URL, rep.attachment, rep.collectionId, rep.id)}
			contents={rep.contents}
			authorName={rep.expand.author.username}
			timestamp={rep.created.slice(0, rep.created.length - 8)}
			boardName={data.boardName}
			postId={rep.id}
			gotoButton={false}
		/>
		{/each}
</main>

<style>
</style>
