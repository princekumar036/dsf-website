<script lang="ts">
    import { onMount } from 'svelte';
    import PostCard from '../components/PostCard.svelte';
    import { archive_store, archive_pagination_store } from '$lib/stores';
    const archive = $archive_store

    let searchTerm = ''

    onMount(() => {
        document.querySelectorAll('.paginationBtn').item($archive_pagination_store-1).classList.add('bg-red-800', 'text-white')
    })

    $: filteredPosts = searchTerm 
        ? archive.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : archive.slice($archive_pagination_store * 20 - 20, $archive_pagination_store * 20)

    function changePagination(index) {
        $archive_pagination_store = index + 1
        document.querySelectorAll('.paginationBtn').forEach(btn => btn.classList.remove('bg-red-800', 'text-white'))
        document.querySelectorAll('.paginationBtn').item(index).classList.add('bg-red-800', 'text-white')
    }
</script>

<svelte:head>
    <title>Archive - DSF</title>
</svelte:head>

<main class="min-h-screen py-10 px-10 max-w-6xl mx-auto">
    <h2 class="text-4xl font-rbto-cnsd font-bold text-center">Archive</h2>
    <p class="text-center mb-10">Posts from our <a href="https://dsfjnu.wordpress.com/" target="_blank" class="text-blue-600 underline">legacy blog</a></p>

    <input type="text" placeholder="Search..." class="my-8 block w-full border-2 py-2 px-4 rounded outline-none"
        bind:value={searchTerm}
    >

    <div class="flex flex-wrap gap-8 justify-center">
        {#each filteredPosts as post}
            <PostCard title={post.title} link={`/archive/${post.slug.current}?id=${post._id}`} image={post.featuredMedia} />
        {/each}
    </div>

    <div class="flex justify-between gap-2 my-8 overflow-x-scroll no-scrollbar">
        {#each Array(Math.ceil(archive.length/20)) as _, index}
            <button class="paginationBtn border px-4 py-2 rounded" on:click={() => changePagination(index)}>{index + 1}</button>
        {/each}
    </div>
</main>