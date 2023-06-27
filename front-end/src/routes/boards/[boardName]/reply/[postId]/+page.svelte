<script lang="ts">
	import Post from "$lib/Post.svelte";
	import { PB_URL, pb } from "../../../../../globals";
	import { composeImageURL } from "../../../../../utils";

	export let data;

	const p = data.post
	let formData : FormData
	let file : any;
	let fileChosen = false;
	let contents : string
	let authorID : any = pb.authStore.model?.id;

	// TODO: make image optional, clear attach on post fail??
	let postStatus = 0 // -1 bad, 1 good

	const redirPost = () => {
		location.href = `/boards/${data.boardName}/view/${p.id}`
	}

	const createPost = async () => {
		formData = new FormData();
		formData.append('author', authorID)
		formData.append('og_post', data.post.id)
		formData.append('contents', contents)
		if(fileChosen){
			formData.append('attachment', new Blob(file))
		}
		try {
			await pb.collection('replies').create(formData)
			postStatus = 1
		} catch (err) {
			postStatus = -1;
			console.table(err)
		}
	}
</script>

<main>
	<div class="main">
		<div id="title">
			<h2>
				Replying to:
			</h2>
		</div>
		<Post
			imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
			contents={p.contents}
			authorName={p.expand.author.username}
			timestamp={p.created.slice(0, p.created.length - 8)}
			boardName={data.boardName}
			gotoButton={false}
			postId={p.id}
		/>

		<div class="postarea">
			<form enctype="multipart/form-data">
				<div class="text-editor">
					<textarea bind:value={contents} name="post-contents" cols="30" rows="10" required></textarea>
				</div>
				<div class="attach-selection">
					<input bind:files={file} type="file" accept="image/*" id="fileInput" name="attachment">
			{#if postStatus != 1}
				<button on:click={createPost}>Post!</button>
			{:else if postStatus == 1}
				<button on:click={redirPost}> Reply Added </button>
			{/if}
				</div>
			</form>
			{#if postStatus == 1}
			 	Post created!
			{:else if postStatus == -1}
				Something went wrong when creating this post.
			{/if}
		</div>

	</div>
</main>

<style>
	#title {
		text-align: center;
	}
	.main {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
	}

	textarea {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.attach-selection {
		display: grid;
		grid-template-columns: 2fr 1fr;
		margin-left: auto;
		margin-right: auto;
		width: 20em;
		margin-top: 1rem;
	}
</style>
