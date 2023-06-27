<script lang="ts">
	import { composeImageURL } from "../../../utils";
	import UserEditor from "$lib/UserEditor.svelte";
	import { pb, PB_URL } from "../../../globals";
	import genericAvatar from "$lib/assets/profile_pic.png"

	export let data;
	let profilePic : string
	let canEdit = false;
	if(data.userInfo){
		profilePic = composeImageURL(PB_URL, data.userInfo.avatar, 'users', data.userInfo.id)
	}
	if(data.userInfo.username == pb.authStore.model?.username){
		canEdit = true;
	}
</script>

<main>
	<div class="main">
		<div class="user-profile">
			{#if data.userInfo}
				<div class="user-avatar">
					{#if data.userInfo.avatar == ''}
					<img src={genericAvatar} alt="Avatar">
					{:else}
					<img src={profilePic} alt="Avatar">
					{/if}
				</div>
				<div class="userinfo">
				<span class="username"> {data.userInfo.username} </span>
				<span class="userposts">Posts: {data.userPostCount}</span>
				</div>
				<div class="userbio"> <b>Bio:</b> {data.userInfo.bio}</div>
			{:else}
				User not found
			{/if}
		</div>

		<div class="user-editor">
			{#if canEdit}
				<h3>User Preferences:</h3>
				<UserEditor />
			{/if}
		</div>
	</div>
</main>

<style>

	.main {
		display: grid;
		grid-template-columns: 1fr;
	}

	.user-profile {
		text-align: center;
		font-weight: bold;
		flex: 4;
	}

	img {
		height: 200px;
		max-width: 200px;
		object-fit: fit;
		border-radius: 50%;
		border-style: solid;
		border-width: 0.3rem;
		border-color: lime;
	}

	.userinfo {
		display: grid;
		grid-template-columns: 1fr;
	}

	.userbio {
		margin: 2rem;
	}

	.username {
		margin: 1rem;
	}



</style>
