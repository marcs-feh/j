<script lang="ts">
  export let ref : string;
  export let title : string;
</script>

<main>
	<a href={ref}>{title}</a>
</main>

<style>
	a {
		display:flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		padding: 0.6rem 1rem 0.6rem 1rem;
		width: 80%;
		color: lime;
		border: solid;
		border-radius: 0.3rem;
		border-width: 0.01rem;
		background: transparent;
	}

	a:hover {
		background: lime;
		color: #1d1d1d;
	}
</style>