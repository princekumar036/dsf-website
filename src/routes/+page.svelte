<script>
    import FeaturedEvent from "./components/FeaturedEvent.svelte";
    import History from "./components/History.svelte";
    import OfficeBearers from "./components/OfficeBearers.svelte";
    import Social from "./components/Social.svelte";

</script>


<!-- HERO SECTION -->
    <section class="p-10 grid lg:grid-cols-2 gap-10 items-center text-center lg:text-left bg-slate-100">
        <div><img class="w-96 lg:w-[36rem] mx-auto lg:mr-0" src="./files/star-black-lg.svg" alt=""></div>
        <div class="font-anton text-3xl lg:text-8xl xl:text-9xl">
            <span class="inline-block first-letter:text-red-800 lg:block ">Educate,</span>
            <span class="inline-block first-letter:text-red-800 lg:block  lg:leading-loose">Agitate,</span>
            <span class="inline-block first-letter:text-red-800 lg:block ">Organise!</span>
        </div>
    </section>

    <FeaturedEvent />

<!-- ABOUT SECTION -->
    <section>
        <section class="p-10 text-center lg:hidden">
            <h2 class="text-4xl font-rbto-cnsd font-bold mb-7">About DSF</h2>
            <div class="row-span-3"><img src="./files/unit-conf.png" alt=""></div>
            <p class="my-5 text-justify">DSF is an independent, leftwing students' organisation which was formed in 2012-13 by student activists of JNU. DSF seeks to strengthen the progressive and democratic students' movement across the country on the basis of independent, principled positions on the issues confronting the student community.</p>
            <a class="font-rbto-cnsd font-bold md:text-lg text-white px-10 py-2 bg-red-800 rounded-md block mt-2 shadow-lg hover:scale-110" href="/about">learn more</a>
        </section>
    
        <section class="p-10 max-w-screen-xl mx-auto text-left hidden lg:flex justify-center gap-10 items-center">
            <div class="justify-center">
                <h2 class="text-4xl font-rbto-cnsd font-bold">About DSF</h2>
                <p class="mt-5 mb-7 text-justify">DSF is an independent, leftwing students' organisation which was formed in 2012-13 by student activists of JNU. DSF seeks to strengthen the progressive and democratic students' movement across the country on the basis of independent, principled positions on the issues confronting the student community.</p>
                <a class="font-rbto-cnsd font-bold lg:text-lg text-white px-10 py-3 bg-red-800 rounded-md inline-block shadow-lg hover:scale-95" href="/about">learn more</a>
            </div>
            <div class=""><img src="./files/about.jpg" alt=""></div>
        </section>
    </section>

<!-- DSF's HISTORY -->
    <History />

<!-- LEADERSHIP -->
    <section class="p-10 lg:px-40">

        <div class="text-center">
            <h2 class="text-4xl font-rbto-cnsd font-bold">Office Bearers</h2>
            <h6 class="mb-7">Meet the DSF Leadership</h6>
        </div>

        <OfficeBearers />

    </section>

<!-- JOIN US SECTION -->
<section class="bg-slate-100 px-10 py-16 lg:px-40 text-center lg:text-left lg:flex justify-evenly gap-10">
    <div>
        <img class="w-20 mx-auto lg:ml-0" src="./files/fist_265.svg" alt="">
        <h2 class="text-4xl font-rbto-cnsd font-bold">Join DSF</h2>
        <h6 class=" mb-5 text-lg">Join Independent Students' Movement</h6>
        <hr class="mt-6 mb-4">

        <Social />
    </div>

    <div class="hidden lg:block"><img class="w-96" src="./files/star-black-lg.svg" alt=""></div>

</section>


