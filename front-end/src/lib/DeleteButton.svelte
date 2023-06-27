<script lang="ts">
	import { pb } from "../globals";
	export let postId : string;
	export let boardUrl : string;
  export let title : string;

	const deletePost = async () => {
		try {
			await pb.collection('posts').delete(postId)
			location.replace(`/boards/${boardUrl}`)
		}
		catch(err){
			console.table(err)
		}
	}
</script>

<main>
	<button on:click={deletePost}>{title}</button>
</main>

<style>
	button {
		display:flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		padding: 0.6rem 1rem 0.6rem 1rem;
		width: 80%;
		color: red;
		border: solid;
		border-radius: 0.3rem;
		border-width: 0.01rem;
		background: transparent;
	}

	button:hover {
		background: red;
		color: #1d1d1d;
	}
</style>
