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