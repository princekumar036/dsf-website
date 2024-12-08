<script lang="ts">
    export let data
    
    function getFirstImageSrc(htmlString) {
        const regex = /<img[^>]+src="([^"]+)"/;
        const match = htmlString.match(regex);
        return match ? match[1] : null;
    }
</script>

<div class="flex flex-wrap gap-8 justify-center">
    {#each data.data.posts as post}
        <a href={`/wp/${post.slug}?id=${post.ID}`} class="block w-60 rounded-xl">
            <img src={getFirstImageSrc(post.content)} alt="" class="w-full h-40 object-cover rounded-t-xl" />
            <h2 class="font-bold line-clamp-2">{@html post.title}</h2>
        </a>
    {/each}
</div>