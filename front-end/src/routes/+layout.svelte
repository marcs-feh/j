<script>
	import PocketBase from "pocketbase"
	import { PB_URL } from "../globals";
	let pb = new PocketBase(PB_URL)

	const logOut = () => {
		pb.authStore.clear()
		window.location.reload()
	}
</script>
<main>
	<navbar class="navigation-bar">
		<div id="titlebar">
		<span>/J</span>
		</div>
		<div class="loginbuttons">
			{#if pb.authStore.isValid }
				<button on:click={logOut}>Log-out</button>
			{:else}
				<a href="/login">Login</a>
				<a href="/signup">Sign-up</a>
			{/if}
		</div>
	</navbar>
	<slot />
</main>

<style>
	.navigation-bar {
		display: grid;
		font-family: monospace;
		grid-template-columns: 3fr 1fr;
		padding-bottom: 1rem;
		padding-top: 0.4rem;
	}

	.loginbuttons {

	}

	#titlebar {
		text-align: center;
		font-family: monospace;
		font-size: 1.2rem;
	}
</style>
