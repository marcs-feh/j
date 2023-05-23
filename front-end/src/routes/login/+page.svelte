<script lang="ts">
	import { onMount } from "svelte";
	import { PB_URL, currentUser, pb } from "../../globals";
	import { redirect } from "@sveltejs/kit";

	let username = '';
	let password = '';

	let badLogin = false
	const login = async () => {
		pb.authStore.clear()
		try {
			await pb.collection('users').authWithPassword(username, password)
		} catch (err) {
			badLogin = true
		}
	}

	// onMount(async () => {
	// })

</script>
<main>
	<div class='login-main'>
	<h1>Log In</h1>
	<form class="login-form" on:submit|preventDefault>
		<input class="form-input"
			type="text"
			placeholder="Username"
			bind:value={username}
		/>
		<input class="form-input"
			type="password"
			placeholder="Password"
			bind:value={password}
		/>
		<button class="login-button" on:click={login}>Login</button>
		{#if $currentUser}
			<div class='good-login'>Logged in as {$currentUser.username}</div>
			{:else if badLogin}
			<div class='bad-login'>Invalid Credentials</div>
		{/if}
	</form>
	</div>
</main>

<style>
	h1 {
		text-align: center
	}
	.login-main {
		display: box;
		margin-left: auto;
		margin-right: auto;
	}
	.login-form {
		display: grid;
		grid-template-columns: 1fr;
		margin-left: auto;
		margin-right: auto;
		width: clamp(300px, 75%, 400px);
	}
	.bad-login {
		display: box;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		padding: 0.5rem 1rem 0.5rem 1rem;
		color: red;
	}

	.good-login {
		display: box;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		padding: 0.5rem 1rem 0.5rem 1rem;
		color: lime;
	}

	.login-button {
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
