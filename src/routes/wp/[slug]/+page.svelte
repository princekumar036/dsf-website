<script lang="ts">
    export let data
    
    function getFirstImageSrc(htmlString) {
        const regex = /<img[^>]+src="([^"]+)"/;
        const match = htmlString.match(regex);
        return match ? match[1] : null;
    }
</script>

<div class="prose mx-auto">
    <h1>{data.data.title}</h1>
    <a href="{data.data.URL}">{data.data.URL}</a>
    <div>{@html data.data.content}</div>
</div>