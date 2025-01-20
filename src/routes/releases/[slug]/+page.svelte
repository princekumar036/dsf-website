<script lang="ts">
    import {toHTML} from '@portabletext/to-html'
    import { components, urlFor } from '$lib/sanity';
    import { page } from '$app/stores';
    import { release_store } from '$lib/stores';

    const id = $page.url.searchParams.get('id');    
    const post = $release_store.filter(post => post._id == id)[0]
</script>

<svelte:head>
    <title>{post.title} - Releases - DSF</title>
    <meta name="title" content="{post.title}" />
	<meta name="description" content="{toHTML(post.content)}.substring(0, 150).replace(/<\/?[^>]+(>|$)/g, '')" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.href}" />
	<meta property="og:title" content="{post.title}" />
	<meta property="og:description" content="{toHTML(post.content)}.substring(0, 150).replace(/<\/?[^>]+(>|$)/g, '')" />
	<meta property="og:image" content="{post.featuredMedia}" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{$page.url.href}" />
	<meta property="twitter:title" content="{post.title}" />
	<meta property="twitter:description" content="{toHTML(post.content)}.substring(0, 150).replace(/<\/?[^>]+(>|$)/g, '')" />
	<meta property="twitter:image" content="{post.featuredMedia}" />
</svelte:head>

<div class="min-h-screen mx-auto prose p-10 md:p-0 md:py-10">
    <p class="text-xs italic bg bg-blue-800 inline-block p-1 px-2 rounded-full text-white">Release</p>
    <h1 class="text-center leading-normal">{post.title}</h1>
    <div class="italic leading-tight">
        <p><b>Published on:</b> {new Date(post._updatedAt).toLocaleDateString()}</p>
    </div>
    {#if post.featuredMedia}
        <img src={urlFor(post.featuredMedia).url()} alt={post.title} />
    {/if}
    <div>{@html toHTML( post.content, {components} )}</div>
</div>