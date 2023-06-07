<script lang="ts">
	export let data;
	import { PB_URL, currentUser, pb } from '../../../../globals';

	const formData = new FormData()
	let file : any;
	let contents : string
	let authorID = pb.authStore.model?.id;

	let postStatus = 0 // -1 bad, 1 good

	const createPost = async () => {
		formData.append('author', authorID)
		formData.append('board', data.boardID)
		formData.append('contents', contents)
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
	<h1>Post on: /{data.boardName} </h1>
	<div class="postarea">
		<form enctype="multipart/form-data">
			<div class="text-editor">
				<textarea bind:value={contents} name="post-contents" cols="30" rows="10"></textarea>
			</div>
			<input bind:files={file} type="file" accept="image/*" id="fileInput" name="attachment">
				{#if postStatus != 1}
					<button on:click={createPost}>Post!</button>
				{/if}
		</form>
		{#if postStatus == 1}
			<a href={"/boards/"+data.boardName}> Post created! </a>
			{:else if postStatus == -1}
			Something went wrong when creating this post.
		{/if}
	</div>
</main>

<style>
	.postarea {
		display: grid;
		grid-template-columns: 1fr;
	}

</style>
