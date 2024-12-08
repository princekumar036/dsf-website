<script lang="ts">
    import {toHTML} from '@portabletext/to-html'
    import { components } from '$lib/sanity';
    import { page } from '$app/stores';
    import { archive_store } from '$lib/stores';

    const id = $page.url.searchParams.get('id');
    const post = $archive_store.filter(post => post._id == id)[0]
</script>

<div class="min-h-screen mx-auto prose p-10 md:p-0 md:py-10">
    <p class="text-xs italic bg bg-blue-800 inline-block p-1 px-2 rounded-full text-white">Archive</p>
    <h1 class="text-center leading-normal">{post.title}</h1>
    <div class="italic leading-tight">
        <p><b>Published on:</b> {new Date(post.created).toLocaleDateString()}</p>
        <p><b>Archived from:</b> <a href={post.wordpressURL} target="_blank" class="font-normal">{post.wordpressURL}</a></p>
    </div>
    <hr class="w-1/4 mx-auto border-red-800">
    <div>{@html toHTML( post.content, {components} )}</div>
</div>