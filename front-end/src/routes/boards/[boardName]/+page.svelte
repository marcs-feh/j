<script lang="ts">
	export let data;
	import { onMount } from 'svelte';
	import { PB_URL, pb } from '../../../globals';
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

	let posts : Record[] = [];
	onMount(async () => {
		posts = (await updateBoardPosts()).items
	})

</script>

<main>
	<h1 id="boardtitle">/{data.boardName}</h1>
	<button class="post-button">Create Post</button>
	{#each posts as p}
		<Post
			imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
			contents={p.contents}
			authorName={p.expand.author.name}
			timestamp={p.expand.author.created}
		/>
	{/each}
</main>

<style>
	#boardtitle {
		text-align: center;
		font-family: monospace;
	}
</style>
