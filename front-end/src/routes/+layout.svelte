<script>
	import PocketBase from "pocketbase"
	import { PB_URL } from "../stores";
	let pb = new PocketBase(PB_URL)

	const logOut = () => {
		pb.authStore.clear()
	}
</script>
<main>
	<navbar class="navigation-bar">
		<a href="./login">Login</a>
		<a href="./signup">Sign-up</a>
		<button on:click={logOut}>Log-out</button>
	</navbar>
	<h1 id="titlebar">/J</h1>
	<slot />
</main>

<style>
	#titlebar {
		text-align: center;
		font-family: monospace;
	}
</style>
