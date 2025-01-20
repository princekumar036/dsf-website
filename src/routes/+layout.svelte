<script lang="ts">
	import '../app.css';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Democratic Students' Federation</title>
</svelte:head>

<Header />
<main class="">
	{@render children()}
</main>
<Footer />