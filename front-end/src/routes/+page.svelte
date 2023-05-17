<script lang="ts">
	import PocketBase, { Record } from "pocketbase";
	import { onMount } from "svelte";
	import { PB_URL } from '../stores';
	import Image from "../lib/Image.svelte";

	let pb = new PocketBase('http://127.0.0.1:8090')

	let userList: Record[] = []
	let boardList: Record[] = []

	// const updateUserList = async () => {
	// 	let users = await pb.collection('users').getFullList({})
	// 	userList = users
	// 	console.table(userList)
	// }

	const updateBoardList = async () => {
		boardList = await pb.collection('boards').getFullList()
		console.table(boardList)
	}

	const composeImageURL = (name : string, collectionIdOrName : string, recordId : string) => {
		// http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
		// http://localhost:8090/api/files/8nzz6c4vb2w7xtt/wfrnnv2xxud2dp9/fumo_4MRbYujrfR.png?thumb=100x100
		let src = `${PB_URL}/api/files/${collectionIdOrName}/${recordId}/${name}`
		console.log(`src: ${src}`)
		return src
	}

	onMount(() => {
		updateBoardList()
	})

</script>

<main>
	<h1>/J</h1>
	<h2>Boards:</h2>
	<div class="boardlist">
		<ul>
			{#each boardList as board}
				<li><span class="boardtitle">{board.name}</span>: {board.description}</li>
				<Image src={composeImageURL(board.banner, board.collectionName, board.id)} />
			{/each}
		</ul>
	</div>
</main>

<style>
	.boardtitle {
		font-family: monospace;
	}
</style>
