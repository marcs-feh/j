<script lang="ts">
	import { onMount } from 'svelte';
	import { PB_URL, pb } from '../../../globals';
	import { Record } from "pocketbase";
	import Post from '$lib/Post.svelte';
	import { composeImageURL } from '../../../utils';

	export let data;

	const updateBoardPosts = async () => {
		let posts = await pb.collection('posts').getList(1, 50, {
			sort: '-created'
		})
		return posts;
	}

	let posts : Record[] = [];
	onMount(async () => {
		posts = (await updateBoardPosts()).items
	})

</script>

<main>
	{#each posts as p}
		<Post
			imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
			contents={p.contents}
		/>
	{/each}
</main>

<style></style>
