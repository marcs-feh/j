<script lang="ts">
	export let data;
	import { PB_URL, currentUser, pb } from '../../../../globals';


	const formData = new FormData()
	let file : any;
	let contents : string
	let authorID = pb.authStore.model?.id;


	const createPost = async () => {
		formData.append('author', authorID)
		formData.append('board', data.boardID)
		formData.append('contents', contents)
		formData.append('attachment', new Blob(file))
		await pb.collection('posts').create(formData)
	}


</script>

<main>
	<h1>Post on: /{data.boardName} </h1>
	<form enctype="multipart/form-data">
		<input bind:value={contents} type="text" name="post-contents" placeholder="Post contents">
		<input bind:files={file} type="file" accept="image/*" id="fileInput" name="attachment">
		<button on:click={createPost}>Post!</button>
	</form>
</main>
