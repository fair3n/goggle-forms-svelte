<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Formulaire from '$lib/Formulaire.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Formulaire />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
