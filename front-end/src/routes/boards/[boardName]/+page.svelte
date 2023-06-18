<script lang="ts">
	import { PB_URL, currentUser } from '../../../globals';
	import { composeImageURL } from '../../../utils';
	export let data;
	import Post from '$lib/Post.svelte';
	import PostButton from '$lib/PostButton.svelte';
</script>

<main>
	<h1 id="boardtitle">/{data.boardName}</h1>

	{#if $currentUser}
	<PostButton
		title={"Create Post"} ref={`${data.boardName}/post`} />
	{:else}
	<PostButton title={"Login"} ref={`/login`} />
	{/if}

	{#if data.posts}
	{#each data.posts.items as p}
		<Post
			imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
			contents={p.contents}
			authorName={p.expand.author.username}
			timestamp={p.created.slice(0, p.created.length - 8)}
			boardName={data.boardName}
			postId={p.id}
		/>
	{/each}
	{:else}
		<h2 style="text-align: center; opacity: 0.6;">No posts... yet.</h2>
	{/if}

</main>

<style>
	#boardtitle {
		text-align: center;
		font-family: monospace;
	}

</style>
