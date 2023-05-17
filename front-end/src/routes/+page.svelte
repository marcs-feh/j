<script lang="ts">
	import PocketBase, { Record } from "pocketbase";
	import { onMount } from "svelte";
	import { PB_URL } from '../stores';
	import BoardBanner from "$lib/BoardBanner.svelte";

	let pb = new PocketBase('http://127.0.0.1:8090')

	let boardList: Record[] = []

	const updateBoardList = async () => {
		boardList = await pb.collection('boards').getFullList()
		console.table(boardList)
	}

	const composeImageURL = (name : string, collectionIdOrName : string, recordId : string) => {
		// http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
		let src = `${PB_URL}/api/files/${collectionIdOrName}/${recordId}/${name}`
		return src
	}

	onMount(() => {
		updateBoardList()
	})

</script>

<main>
	<h1 id="titlebar">/J</h1>
	<h2>Boards:</h2>
	<div class="boardlist">
		{#each boardList as board}
			<BoardBanner 
				title={board.name}
				imagePath={composeImageURL(board.banner, board.collectionName, board.id)}
				anchorURL={'./' + board.name}
				textColor='#ffffff'
			/>
		{/each}
	</div>
</main>

<style>
	#titlebar {
		text-align: center;
		font-family: monospace;
	}
	.boardlist {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	h2 {
		font-family: monospace;
	}
</style>
