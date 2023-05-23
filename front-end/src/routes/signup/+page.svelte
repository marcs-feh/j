<script lang="ts">
	import { onMount } from "svelte";
	import { PB_URL, currentUser, pb } from "../../globals";
	import { redirect } from "@sveltejs/kit";

	let userData: any = {
		"username": '',
		"email": '',
		"emailVisibility": false,
		"password": '',
		"passwordConfirm": '',
		"mod": false,
	};

	let badsignup = false
	const signup = async () => {
		try {
			await pb.collection('users').create(userData)
		} catch (err){
			badsignup = true
		}
		await pb.collection('users').authWithPassword(userData.email, userData.password)
		userData = null
	}

</script>
<main>
	<div class='signup-main'>
		<h1>Signup</h1>
		<form class="signup-form" on:submit|preventDefault>
			<input style="padding: 1rem; margin:0.3rem"
				type="email"
				placeholder="Email"
				bind:value={userData.email}
			/>
			<input class="form-input"
				type="text"
				placeholder="Username"
				bind:value={userData.username}
			/>
			<input class="form-input"
				type="password"
				placeholder="Password"
				bind:value={userData.password}
			/>
			<input class="form-input"
				type="password"
				placeholder="Confirm Password"
				bind:value={userData.passwordConfirm}
			/>

			<button class="signup-button" on:click={signup}>signup</button>
			{#if $currentUser}
				<div class='good-signup'>Already logged in as {$currentUser.username}</div>
				{:else if badsignup}
				<div class='bad-signup'>Failed to Create user</div>
			{/if}
		</form>
	</div>
</main>

<style>
	h1 {
		text-align: center
	}
	.signup-main {
		display: box;
		margin-left: auto;
		margin-right: auto;
	}
	.signup-form {
		display: grid;
		grid-template-columns: 1fr;
		margin-left: auto;
		margin-right: auto;
		width: clamp(300px, 75%, 400px);
	}
	.bad-signup {
		display: box;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		padding: 0.5rem 1rem 0.5rem 1rem;
		color: red;
	}

	.good-signup {
		display: box;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		padding: 0.5rem 1rem 0.5rem 1rem;
		color: lime;
	}

	.signup-button {
		display: box;
		margin-left: auto;
		margin-right: auto;
		padding: 0.5rem 1rem 0.5rem 1rem;
	}

	.form-input {
		padding: 1rem;
		margin:0.3rem;
	}

</style>

<main>
</main>
