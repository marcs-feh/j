<script lang="ts">
	import { composeImageURL } from "../../../utils";
	import { PB_URL } from "../../../globals";
	import genericAvatar from "$lib/assets/profile_pic.png"

	export let data;

	let profilePic : string = composeImageURL(PB_URL, data.userInfo.avatar, 'users', data.userInfo.id)

</script>

<main>
	<div class="user-profile">
		<div class="user-avatar">
			{#if data.userInfo.avatar == ''}
			<img src={genericAvatar} alt="Avatar">
				{:else}
			<img src={profilePic} alt="Avatar">
				{/if}
		</div>
		<span id="username">
		{data.userInfo.username}
		</span>
	</div>
</main>

<style>
	main {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.user-profile {
		display: flex;
		align-items: center;
		flex-direction: column;
		max-height: 220px;
		text-align: center;
		font-weight: bold;
		margin: 1rem;
	}

	img {
		flex: 1;
		height: 200px;
		object-fit: fit;
		border-radius: 50%;
		border-style: solid;
		border-width: 0.3rem;
		border-color: lime;
	}

	#username {
		margin: 1rem;
	}

</style>
