<script lang="ts">
	import { composeImageURL } from '../../../../../utils';
	import { pb } from '../../../../../globals';
	import { PB_URL, currentUser } from '../../../../../globals';
	import Post from '$lib/Post.svelte';
	import PostButton from '$lib/PostButton.svelte';
	import DeleteButton from '$lib/DeleteButton.svelte';

	export let data;


	const p = data.post
	let canDelete : boolean = false;
	if(pb.authStore != null){
		canDelete = pb.authStore.model?.id == p.author
	}

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
		{#if $currentUser && canDelete}
		<div class="reply-and-del">
		<DeleteButton title={"Delete"} postId={p.id} boardUrl={`${data.boardName}`}/>
		<PostButton title={"Reply to Post"} ref={`/boards/${data.boardName}/reply/${data.post.id}`} />
		</div>
		{:else if $currentUser}
		<PostButton title={"Reply to Post"} ref={`/boards/${data.boardName}/reply/${data.post.id}`} />
		{:else}
		<PostButton title={"Login"} ref={`/login`} />
		{/if}
		
		<h2>
		Replies:
		</h2>
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
	.reply-and-del {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
