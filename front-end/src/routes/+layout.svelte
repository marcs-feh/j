<script>
	import PocketBase from "pocketbase"
	import Navbar from "$lib/Navbar.svelte"
	import { PB_URL, currentUser, pb } from "../globals";
</script>
<main>
	<Navbar />
	<div class="main-section">
	<slot />
	</div>
</main>

<style>
	:global(body){
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		background: #1e1e1e;
		color: #dcdcdc;
	}

	:global(button){
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		border: solid;
	}

	/* Hightlight all links all the time */
	:global(a){ text-decoration: none; }
	:global(a:visited) { color:#dcdcdc; }
	:global(a:active) { color:#dcdcdc; }
	:global(a:hover) { color:lime; }
	:global(a:link) { color:#dcdcdc; }

	.main-section {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: clamp(600px, 95%, 1100px)
	}
</style>
