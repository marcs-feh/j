<script>
	import PocketBase from "pocketbase"
	import { PB_URL, currentUser, pb } from "../globals";

	export const csr = true; // CSR is needed for the navbar

	const logOut = () => {
		pb.authStore.clear()
		window.location.reload()
	}

</script>
<main>
	<navbar class="navigation-bar">
		<div id="titlebar">
		<a href="/">/J</a>
		</div>
		<div class="loginbuttons">
			{#if $currentUser }
				Me: {$currentUser.name}
				<button on:click={logOut}>Log-out</button>
			{:else}
				<a href="/login">Login</a>
				<a href="/signup">Sign-up</a>
			{/if}
		</div>
	</navbar>
	<div class="main-section">
	<slot />
	</div>
</main>

<style>
	main {
		font-family: 'Roboto', sans-serif;
	}
	.navigation-bar {
		display: grid;
		font-family: monospace;
		grid-template-columns: 3fr 1fr;
		padding-bottom: 1rem;
		padding-top: 0.4rem;
	}

	.main-section {
		display: box;
		margin-left: auto;
		margin-right: auto;
		width: clamp(600px, 95%, 1200px)
	}

	#titlebar {
		text-align: center;
		font-family: monospace;
		font-size: 1.2rem;
	}
</style>
