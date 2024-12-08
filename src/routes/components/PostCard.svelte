<script lang="ts">
    import { urlFor } from "$lib/sanity";

    export let title:string
    export let link:string
    export let image:string
</script>

<div>
    <a href={link} class="block w-60 rounded-xl hover:scale-105 transition">
            <img 
                src={image ? urlFor(image).url() : "https://placehold.co/100?text=No+Image"} 
                alt={title} 
                class="w-full h-40 object-cover rounded-xl " 
            />
        <h2 class="font-bold" title={title}>{title}</h2>
    </a>
</div>