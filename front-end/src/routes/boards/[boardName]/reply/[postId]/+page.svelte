<script lang="ts">
	import Post from "$lib/Post.svelte";
	import { PB_URL, pb } from "../../../../../globals";
	import { composeImageURL } from "../../../../../utils";

export let data;

const p = data.post
const formData = new FormData()
let file : any;
let contents : string
let authorID : any = pb.authStore.model?.id;

// TODO: make image optional, clear attach on post fail??
let postStatus = 0 // -1 bad, 1 good

const createPost = async () => {
  formData.append('author', authorID)
  formData.append('og_post', data.post.id)
  formData.append('contents', contents)
  formData.append('attachment', new Blob(file))
  try {
    await pb.collection('replies').create(formData)
    postStatus = 1
  } catch (err) {
    postStatus = -1;
    console.table(err)
  }
}
</script>

<main>
<h1>
  Replying to:
</h1>
<Post
  imagePath={composeImageURL(PB_URL, p.attachment, p.collectionId, p.id)}
  contents={p.contents}
  authorName={p.expand.author.username}
  timestamp={p.created.slice(0, p.created.length - 8)}
  boardName={data.boardName}
  postId={p.id}
/>

<div class="postarea">
  <form enctype="multipart/form-data">
    <div class="text-editor">
      <textarea bind:value={contents} name="post-contents" cols="30" rows="10" required></textarea>
    </div>
    <input bind:files={file} type="file" accept="image/*" id="fileInput" name="attachment">
      {#if postStatus != 1}
        <button on:click={createPost}>Post!</button>
      {/if}
  </form>
  {#if postStatus == 1}
    <a href={"/boards/"+data.boardName}> Post created! </a>
    {:else if postStatus == -1}
    Something went wrong when creating this post.
  {/if}
	</div>

</main>

<style>
</style>
