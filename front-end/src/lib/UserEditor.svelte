<script lang="ts">
	import { pb } from "../globals";

	const user = pb.authStore.model

	let newBio : string = user?.bio
	let avatar : any
	let formData : FormData

	let updateStatus = 0

	const updateProfile = async () => {
		updateStatus = 0
		formData = new FormData();
		formData.append('bio', newBio)
		if(avatar != null && avatar != undefined){
			formData.append('avatar', new Blob(avatar))
		}
		try {
			await pb.collection('users').update(pb.authStore.model?.id, formData)
			updateStatus = 1;
		} catch(err){
			updateStatus = -1
		}
	}
</script>

<main>
	<div class="main">
		<form enctype="multipart/form-data">
			<div class="field">
			<b style="margin-right:1rem">Bio:</b>
			<div class="text-editor">
				<textarea bind:value={newBio} name="bio-contents" cols="30" rows="3"></textarea>
			</div>
			</div>

			<div class="field">
			<b style="margin-right:1rem">Avatar:</b>
			<div class="file-picker">
	 			<input bind:files={avatar} type="file" accept="image/*" id="fileInput" name="attachment">
			</div>
			</div>
		</form>
		<button on:click={updateProfile}>Update</button>

		{#if updateStatus == 1}
		 	Profile Updated
			{:else if updateStatus == -1}
			Could not update user, are you logged in?
		{/if}
	</div>

</main>

<style>
	.main {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
	}
	.field {
		display: flex;
		flex-direction: row;
	}
</style>
