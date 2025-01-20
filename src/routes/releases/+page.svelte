<script lang="ts">
    import { onMount } from 'svelte';
    import PostCard from '../components/PostCard.svelte';
    import { release_store } from '$lib/stores';
</script>

<svelte:head>
    <title>Releases - DSF</title>
</svelte:head>

<main class="min-h-screen py-10 px-10 max-w-6xl mx-auto">
    <h2 class="text-4xl font-rbto-cnsd font-bold text-center">Releases</h2>
    <p class="text-center mb-10">Our latest parchas and posters</p>

    <div class="flex flex-wrap gap-8 justify-center">
        {#each $release_store as post}
            <PostCard title={post.title} link={`/releases/${post.slug.current}?id=${post._id}`} image={post.featuredMedia} />
        {/each}
    </div>
</main>