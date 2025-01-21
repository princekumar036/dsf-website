<script lang="ts">
    import PostCard from '../components/PostCard.svelte';
    import { event_store } from '$lib/stores';
    import { urlFor, components } from '$lib/sanity';
    
    const upcomingEvents = $event_store.filter(event => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
    const pastEvents = $event_store.filter(event => new Date(event.date) < new Date())
</script>

<svelte:head>
    <title>Events - DSF</title>
</svelte:head>

<main class="min-h-screen py-10 px-10 max-w-6xl mx-auto">
    <h2 class="text-4xl font-rbto-cnsd font-bold text-center">Events</h2>
    <p class="text-center mb-10">Upcoming and past events</p>

    {#if upcomingEvents.length > 0}
    <h2 class="text-2xl font-rbto-cnsd font-bold mt-10 mb-5">Upcoming Event</h2>
        {#each upcomingEvents as post}
            <a href="/events/{post.slug.current}?id={post._id}" class="block mb-20">
                <img 
                    src={post.eventImage ? urlFor(post.eventImage).url() : "https://placehold.co/100?text=No+Image"} 
                    alt={post.title} 
                    class="w-full h-80 object-cover rounded-xl" 
                />
                <h2 class="font-bold text-xl my-4">{post.title}</h2>
                <div class="md:flex gap-20">
                    <p><b>Date:</b> {new Date(post.date).toDateString()}, {new Date(post.date).toLocaleTimeString()}</p>
                    <p class="my-2 md:my-0"><b>Venue:</b> {post.venue}</p>
                </div>
                {#if post.guests}<p class="my-2"><b>Guests/Speakers:</b> {post.guests.join(', ')}</p>{/if}
            </a>
        {/each}
        <hr>
    {/if}


    <h2 class="text-2xl font-rbto-cnsd font-bold mt-10 mb-5">Past Events</h2>
    <div class="flex flex-wrap gap-8 justify-center">
        {#each pastEvents as post}
            <PostCard title={post.title} link={`/events/${post.slug.current}?id=${post._id}`} image={post.eventImage} />
        {/each}
    </div>
</main>