<script lang="ts">
	import { pb } from "../globals";

	const user = pb.authStore.model

	let newBio : string
	let updateStatus = 0

	const updateProfile = async () => {
		updateStatus = 0
		try {
			await pb.collection('users').update(pb.authStore.model.id, {"bio":newBio})
		} catch(err){
			updateStatus = -1
		}
	}
	// <input bind:files={file} type="file" accept="image/*" id="fileInput" name="attachment">
</script>

<main>
	<div class="editarea">
		<form enctype="multipart/form-data">
			<div class="text-editor">
				<textarea bind:value={newBio} name="post-contents" cols="30" rows="10" required></textarea>
			</div>
				{#if updateStatus != 1}
					<button on:click={updateProfile}>Update</button>
				{/if}
		</form>
		{#if updateStatus == 1}
			<a href={"/"}> Profile Updated </a>
			{:else if updateStatus == -1}
			Could not update user, are you logged in?
		{/if}
	</div>

</main>

<style>
	.editarea {
		display: grid;
		grid-template-columns: 1fr;
	}
</style>
