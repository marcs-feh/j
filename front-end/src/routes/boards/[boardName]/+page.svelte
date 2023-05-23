<script lang="ts">
	export let data;
	import { onMount } from 'svelte';
	import { PB_URL, currentUser, pb } from '../../../globals';
	import { Record } from "pocketbase";
	import Post from '$lib/Post.svelte';
	import { composeImageURL } from '../../../utils';

	const updateBoardPosts = async () => {
		let posts = await pb.collection('posts').getList(1, 50, {
			sort: '-created',
			expand: 'author',
			filter: `board.name = "${data.boardName}"`,
		})
		return posts;
	}

	let posts : any = [];
	onMount(async () => {
		posts = (await updateBoardPosts()).items
	})

</script>

<main>
	<h1 id="boardtitle">/{data.boardName}</h1>

	{#if $currentUser}
	<a href={`${data.boardName}/post`} class="post-button">Create Post</a>
	{:else}
	<a href={`/login`} class="post-button">Login to post</a>
	{/if}

	{#each posts as p}
		<Post
			imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
			contents={p.contents}
			authorName={p.expand.author.username}
			timestamp={p. expand.author.created}
		/>
	{/each}
</main>

<style>
	#boardtitle {
		text-align: center;
		font-family: monospace;
	}

	.post-button:link {
		display:flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		padding: 0.6rem 1rem 0.6rem 1rem;
		width: 80%;
		color: lime;
		border: solid;
		border-radius: 0.3rem;
		border-width: 0.01rem;
		background: transparent;
	}

	.post-button:hover {
		background: lime;
		color: #1d1d1d;
	}

</style>
