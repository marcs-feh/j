<script lang="ts">
	export let data;
	import { PB_URL, currentUser, pb } from '../../../../globals';

	const formData = new FormData()
	let file : any;
	let contents : string
	let authorID : any = pb.authStore.model?.id;

	let postStatus = 0 // -1 bad, 1 good

	const redirPost = () => {
		location.href = `/boards/${data.boardName}`
	}

	const createPost = async () => {
		formData.append('author', authorID)
		formData.append('board', data.boardID)
		formData.append('contents', contents)
		// console.table(contents)
		formData.append('attachment', new Blob(file))
		try {
			await pb.collection('posts').create(formData)
			postStatus = 1
		} catch (err) {
			postStatus = -1;
			console.log(err)
		}
	}

</script>

<main>
	<div class="main">
		<div id="title">
			<h1>Post on: /{data.boardName} </h1>
		</div>
		<div class="postarea">
			<form enctype="multipart/form-data">
				<div class="text-editor">
					<textarea bind:value={contents} name="post-contents" cols="40" rows="12" required></textarea>
				</div>
				<div class="attach-selection">
				<input bind:files={file} type="file" accept="image/*" id="file-input" name="attachment">
			{#if postStatus != 1}
				<button on:click={createPost}>Post!</button>
			{:else if postStatus == 1}
				<button on:click={redirPost}> View </button>
			{:else if postStatus == -1}
				Something went wrong when creating this post.
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
