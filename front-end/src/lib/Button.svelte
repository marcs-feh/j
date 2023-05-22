<script lang="ts">
	export let callback: any;
	export let buttonLabel: string;
	export let fontSize: number;
</script>

<main>
	<button style={`font-size:${fontSize}rem`} on:click={callback}>{buttonLabel}</button>
</main>

<style>

</style>
