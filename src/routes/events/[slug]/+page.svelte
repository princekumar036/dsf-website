<script lang="ts">
    import {toHTML} from '@portabletext/to-html'
    import { components, urlFor } from '$lib/sanity';
    import { page } from '$app/stores';
    import { event_store } from '$lib/stores';

    const id = $page.url.searchParams.get('id');    
    const post = $event_store.find(post => post._id == id)
</script>

<svelte:head>
    <title>{post.title} - Events - DSF</title>
    <meta name="title" content="{post.title}" />
	<meta name="description" content="{toHTML(post.content)}.substring(0, 150).replace(/<\/?[^>]+(>|$)/g, '')" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.href}" />
	<meta property="og:title" content="{post.title} - {post.date}" />
	<meta property="og:description" content="{toHTML(post.content)}.substring(0, 150).replace(/<\/?[^>]+(>|$)/g, '')" />
	<meta property="og:image" content={urlFor(post.eventImage).url()} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{$page.url.href}" />
	<meta property="twitter:title" content="{post.title} - {post.date}" />
	<meta property="twitter:description" content="{toHTML(post.content)}.substring(0, 150).replace(/<\/?[^>]+(>|$)/g, '')" />
	<meta property="twitter:image" content={urlFor(post.eventImage).url()} />
</svelte:head>

<div class="min-h-screen mx-auto prose p-10 md:p-0 md:py-10">
    <p class="text-xs italic bg-blue-800 inline-block p-1 px-2 rounded-full text-white">Event</p>

    <h1 class="text-center leading-normal">{post.title}</h1>

    <div class="leading-none">
        <p><b>Date:</b> {new Date(post.date).toDateString()}</p>
        <p class="-my-2"><b>Venue:</b> {@html post.venue}</p>
        {#if post.guests}<p><b>Guests/Speakers:</b> {@html post.guests ? post.guests.join(', ') : ''}</p>{/if}
    </div>

    {#if post.eventImage}
        <img src={urlFor(post.eventImage).url()} alt={post.title} class="w-full" />
    {/if}
    
    <div>{@html toHTML( post.content, {components} )}</div>
</div>