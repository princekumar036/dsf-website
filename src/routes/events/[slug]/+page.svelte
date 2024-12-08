<script lang="ts">
    import {toHTML} from '@portabletext/to-html'
    import { components, urlFor } from '$lib/sanity';
    import { page } from '$app/stores';
    import { event_store } from '$lib/stores';

    const id = $page.url.searchParams.get('id');    
    const post = $event_store.find(post => post._id == id)
</script>

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