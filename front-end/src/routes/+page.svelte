<script lang="ts">
	import { Record } from "pocketbase";
	import BoardBanner from "$lib/BoardBanner.svelte";
	import { onMount } from "svelte";
	import { composeImageURL } from "../utils"
	import { PB_URL, pb } from "../globals";

	let boardList: Record[] = []

	const updateBoardList = async () => {
		boardList = await pb.collection('boards').getFullList()
	}

	onMount(() => {
		updateBoardList()
	})

</script>

<main>
	<h2>Boards:</h2>
	<div class="boardlist">
		{#each boardList as board}
			<BoardBanner 
				title={board.name}
				imagePath={composeImageURL(PB_URL, board.banner, board.collectionName, board.id)}
				anchorURL={'/boards/' + board.name}
				textColor={board.contrastColor || '#ffffff'}
			/>
		{/each}
	</div>
</main>

<style>
	.boardlist {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	h2 {
		font-family: monospace;
	}
</style>
