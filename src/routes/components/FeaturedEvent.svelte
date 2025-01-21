
<script>
    import { urlFor, components } from "$lib/sanity";
    import { event_store } from "$lib/stores";
    import {toHTML} from '@portabletext/to-html'
    const UpcomingEvents = $event_store.filter(event => new Date(event.date) > new Date())
    const featuredEvent = UpcomingEvents[UpcomingEvents.length - 1]
</script>

{#if featuredEvent}
<section>
    <a href="/events/{featuredEvent.slug.current}?id={featuredEvent._id}" class="flex flex-col justify-center items-center md:flex-row md:items-center gap-8 p-8 py-12 bg-red-800 text-white">
        {#if featuredEvent.eventImage}
            <img src={urlFor(featuredEvent.eventImage).url()} alt={featuredEvent.title} class="block shadow-lg md:max-w-80 w-80 h-80 object-cover">
        {/if}
        <div> 
            <p class="text-xs italic bg bg-blue-800 inline-block p-1 px-2 rounded-full">Upcoming Event</p>
            <div class="flex items-center gap-8 text-xs my-3 mb-4">
                {#if featuredEvent.date}<p><i class="fa-solid fa-clock"></i> <span>{new Date(featuredEvent.date).toDateString()}, {new Date(featuredEvent.date).toLocaleTimeString()}</span></p>{/if}
                {#if featuredEvent.venue}<p><i class="fa-solid fa-location-dot"></i> <span>{featuredEvent.venue}</span></p>{/if}
            </div>
            <p class="font-black text-xl">{featuredEvent.title}</p>
        </div>
    </a>
</section>
{/if}