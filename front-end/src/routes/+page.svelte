<script lang="ts">
	import { json } from "@sveltejs/kit";
import PocketBase, { Record } from "pocketbase";
import { onMount } from "svelte";

let pb = new PocketBase('http://127.0.0.1:8090')

let userList: Record[] = []

const updateUserList = async () => {
  let users = await pb.collection('users').getFullList({})
  userList = users
  console.table(userList)
}

onMount(() => {
  updateUserList()
})

let size = 1
let benis = '8D'

const updateBenis = (n:number) => {
  benis = '8'
  for(let i = 0; i < n; i++){
    benis += '='
  }
  benis += 'D'
}

</script>

<main>
<div>
{ benis }
</div>
<button on:click={ () => {size += 1; updateBenis(size); }  }> Rub :DDD</button>

<h2>Problematicos cadastrados:</h2>
{#each userList as user}
<li>
  { user['name'] }
</li>
{/each}

</main>
