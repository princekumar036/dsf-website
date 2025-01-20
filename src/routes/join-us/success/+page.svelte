<script lang="ts">
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Success - Join Us - DSF</title>
</svelte:head>

<main class="min-h-screen p-10 max-w-screen-md mx-auto">
    <div class="text-center my-10">
        <p class="text-xl font-bold">You have registered successfully</p>
        <p class="text-xl mt-5">Revolutionary greetings on joining DSF</p>
        <p class="my-5">As an independent left student organization, we are in need of funds for continuing the functioning of the organization and undertake various initiatives. Therefore, kindly pay the membership fee of minimum Rs 5 on given UPI Id.</p>
        <a href="upi://pay?pa=sarikajnu@dbs&pn=Democratic%20Students%27%20Federation&tn=Membership%20Fee%20(min%20Rs%205)&cu=INR">
            <p class="font-bold text-xl tracking-wider text-blue-500 underline">sarikajnu@dbs</p>
            <img class="block mx-auto w-40 mt-2" src="/files/qrcode.svg" alt="QR Code">
        </a>
        <p class="mt-5">You can also <a class="underline text-blue-500 font-bold" href="/contact">contact</a> any of our office bearers to pay the membership fee or for any other queries.</p>
    </div>
</main>