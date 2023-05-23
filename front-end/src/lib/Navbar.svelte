<script>
	import { PB_URL, currentUser, pb } from "../globals";

	const logOut = () => {
		pb.authStore.clear()
		window.location.reload()
	}

</script>

<main>
	<navbar class="navigation-bar">
		<div class="padding-div"></div>

		<div id="titlebar">
		<a href="/">/J</a>
		</div>

		<div class="loginbuttons">
			{#if $currentUser }
				<div class="anchor loginbutton">
					{$currentUser.username}
				</div>
				<div class="loginbutton">
					<button on:click={logOut}>Log out</button>
				</div>
			{:else}
				<div class="anchor loginbutton">
				<a style="padding: 1rem;"href="/login">Login</a>
				</div>
				<div class="anchor loginbutton">
				<a href="/signup">Sign-up</a>
				</div>
			{/if}
		</div>

	</navbar>
</main>

<style>
	.navigation-bar {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		padding-bottom: 0.4rem;
		padding-top: 0.4rem;
		text-align: center;
		background-color: #2d2d2d;
	}

	.anchor {
		padding: 0.5rem 0.3rem 0.5rem 0.3rem;
	}

	.loginbuttons {
		display: flex;
		justify-content: center;
		color: #dcdcdc;
	}

	.loginbutton {
		flex:1;
	}

  button {
		background: transparent;
		border-color: lime;
		border-style: solid;
		border-width: 0.01rem;
		padding: 0.5rem 0.3rem 0.5rem 0.3rem;
		color: #dcdcdc;
	}

	button:hover {
		background: lime;
		color: #2d2d2d;
	}

	#titlebar {
		text-align: center;
		font-family: monospace;
		color: lime;
		font-size: 1.6rem;
	}

	#titlebar > a {
		color: lime;
	}

</style>
