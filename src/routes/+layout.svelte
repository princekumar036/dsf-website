<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
	let { children } = $props();

	// NAV MENU TOGGLE
	$(document).ready(function() {
		$('#navtoggle').click(function() {
			$('#navtoggle-open').toggle();
			$('#navtoggle-close').toggle();
			$('#navmenu').slideToggle();
		})
	})


	// MOVEMENTS DESCRIPTION APPEARS ON HOVER ON LARGE SCREEN
	if(window.screen.width >= 1024) {
		$('#movements article').hover(function() {
			$(this).find('#movement-description').slideToggle()
		})
	}


	// MOVEMENTS SROLL ON CLICKING LEFT AND RIGHT BUTTON
		// ON LARGE SCREEN
	document.querySelector('#slide-right').addEventListener('click', function(e) {
		document.querySelector('#movements').scrollBy({
			top: 0,
			left: 500,
			behavior: 'smooth'
			});
	})
	document.querySelector('#slide-left').addEventListener('click', function() {
		document.querySelector('#movements').scrollBy({
			top: 0,
			left: -500,
			behavior: 'smooth'
			});
	})
</script>

<svelte:head>
	<title>Democratic Students' Federation</title>
	<meta name="title" content="Democratic Students' Federation" />
	<meta name="description" content="DSF is an independent, leftwing students' organisation which seeks to strengthen the progressive and democratic students' movement across the country on the basis of independent, principled positions on the issues confronting the student community." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.href}" />
	<meta property="og:title" content="Democratic Students' Federation" />
	<meta property="og:description" content="DSF is an independent, leftwing students' organisation which seeks to strengthen the progressive and democratic students' movement across the country on the basis of independent, principled positions on the issues confronting the student community." />
	<meta property="og:image" content="/star-black-lg.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{$page.url.href}" />
	<meta property="twitter:title" content="Democratic Students' Federation" />
	<meta property="twitter:description" content="DSF is an independent, leftwing students' organisation which seeks to strengthen the progressive and democratic students' movement across the country on the basis of independent, principled positions on the issues confronting the student community." />
	<meta property="twitter:image" content="/star-black-lg.svg" />
</svelte:head>

<Header />
<main class="">
	{@render children()}
</main>
<Footer />