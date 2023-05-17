<script lang="ts">
	import { PB_URL } from '../../stores.js';

	import PocketBase from "pocketbase";

	export let data;

	const pb = new PocketBase(PB_URL)
	const getBoardPosts = async (name : string) => {
	}

</script>

<main>
	hello { data.boardName }
</main>

<style></style>
