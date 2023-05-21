<script lang="ts">
	import { onMount } from "svelte";
	import PocketBase from "pocketbase"
	import { PB_URL } from "../../globals";

	let pb = new PocketBase(PB_URL)

	onMount(async () => {
		if(!pb.authStore.isValid){
			console.log('Running auth')
			let authData = await pb.collection('users').authWithPassword(
				'romulo227', '12345678')
		} else {
			console.log('already logged in')
		}
	})

</script>

<main>
</main>
