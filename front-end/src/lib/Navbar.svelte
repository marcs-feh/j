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
					<a class="anchor loginbutton"
						href={"/user/" + $currentUser.username}>
					{$currentUser.username}</a>

					<button class="loginbutton"
						on:click={logOut}>Log out</button>
			{:else}
				<a class="anchor loginbutton"
						href="/login">Login</a>
				<a class="anchor loginbutton"
					href="/signup">Sign-up</a>
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

 .loginbutton {
		background: transparent;
		border-color: lime;
		border-style: solid;
		border-radius: 0.2rem;
		border-width: 0.01rem;
		padding: 0.5rem 0.3rem 0.5rem 0.3rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		color: #dcdcdc;
	}

	.loginbutton:hover {
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
