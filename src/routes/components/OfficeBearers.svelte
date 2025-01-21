

<script>
    import { officebearer_store } from "$lib/stores";
    import { urlFor } from "$lib/sanity";
</script>


<div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-7 md:gap-12 mb-20">

    {#each $officebearer_store as ob}
    <div class="flex gap-3 rounded-lg shadow-md md:flex-col md:w-fit md:px-16 md:py-5 md:text-center hover:scale-105 transition-transform hover:shadow-lg">
        
        {#if ob.image}
            <img class="w-40 h-40 object-cover rounded-l-lg md:rounded-full" src={urlFor(ob.image).url()} alt={ob.name}>
        {/if}

        <div class="my-auto text-gray-600">
            
            <h4 class="text-lg font-bold">{ob.position}</h4>
            <hr class="my-1">
            <h3 class="text-xl font-bold">{ob.name}</h3>
            <p class="text-sm opacity-75 italic">{[ob.course, ob.center, ob.school].join(', ')}</p>

            <div class="text-2xl ml-3 mt-5 tracking-widest">
                {#if ob.email}
                    <span class="inline-block hover:scale-110 transition-transform">
                        <a target="_blank" href="mailto:{ob.email}"><i class="fa-regular fa-envelope"></i></a>
                    </span>
                {/if}

                {#if ob.facebook}
                    <span class="inline-block hover:scale-110 transition-transform">
                        <a target="_blank" href="{ob.facebook}"><i class="fa-brands fa-facebook"></i></a>
                    </span>
                {/if}

                {#if ob.instagram}
                    <span class="inline-block hover:scale-110 transition-transform">
                        <a target="_blank" href="{ob.instagram}"><i class="fa-brands fa-instagram"></i></a>
                    </span>
                {/if}

                {#if ob.twitter}
                    <span class="inline-block hover:scale-110 transition-transform">
                        <a target="_blank" href="{ob.twitter}"><i class="fa-brands fa-twitter"></i></a>
                    </span>
                {/if}

                {#if ob.whatsappNo}
                    <span class="inline-block hover:scale-110 transition-transform">
                        <a target="_blank" href="https://wa.me/91{ob.whatsappNo}"><i class="fa-brands fa-whatsapp"></i></a>
                    </span>
                {/if}
            </div>
        </div>
    </div>
    {/each}

</div>