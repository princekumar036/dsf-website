<script>
    import { onMount } from "svelte";

    onMount(() => {
        // MOVEMENTS DESCRIPTION APPEARS ON HOVER ON LARGE SCREEN
        if(window.screen.width >= 1024) {
            window.$('#movements article').hover(function() {
                window.$(this).find('#movement-description').slideToggle()
            })
        }


        // MOVEMENTS SROLL ON CLICKING LEFT AND RIGHT BUTTON
            // ON LARGE SCREEN
        document.querySelector('#slide-right').addEventListener('click', function(e) {
            document.querySelector('#movements').scrollBy({
                top: 0,
                left: 500,
                behavior: 'smooth'
                });
        })
        document.querySelector('#slide-left').addEventListener('click', function() {
            document.querySelector('#movements').scrollBy({
                top: 0,
                left: -500,
                behavior: 'smooth'
                });
        })
    })
</script>


<section class="bg-slate-100 py-10 relative">

    <div class="text-center">
        <h2 class="text-4xl font-rbto-cnsd font-bold">10 Years of DSF</h2>
        <h6 class=" mb-7">DSF in movements</h6>
    </div>

    <div id="movements" class="flex gap-10 overflow-x-scroll snap-x no-scrollbar">

        <article id="m1" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative ml-[50vw]">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/12-december-lenin.jpeg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">12 December Movement</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">In 2012, DSF led JNUSU gave the first call of protest and chakka jam following the brutal gang rape of a student in Delhi on 16th December 2012. The movement that followed, ushered in a new national discourse that challenged gender norms and patriarchy. JNUSU President V. Lenin Kumar and GSCASH Representative Ruchira Sen, both members of DSF, were invited by the Justice Verma Committee (JVC) to give recommendations regarding policy interventions to combat sexual violence.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>

        <article id="m2" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/mcm-anagha.jpg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">Fight for MCM</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">DSF led JNUSU in 2012 led a spirited struggle for the increase of the Means cum Merit (MCM) scholarship, and the scholarship was increased from ₹1500 to ₹2000. DSF led JNUSU also ensured that regular remedial classes are held in SLL&CS with payment for classes ensured for student volunteers.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>
        
        <article id="m3" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/rohith.jpg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">Justice for Rohith Vemula</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">DSF comrades sat on a 9-day hunger strike in 2016 to protest the institutional murder of Rohith Vemula in 2016. DSF was also a part of the Joint Action Committee that led the movement to ensure justice for Rohith.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>

        <article id="m4" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/9thFeb.jpg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">9th February Movement: JNU against Sedition Act</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">DSF was at the forefront of the movement against the arrest of JNUSU President Kanhaiya Kumar and JNU activists Umar Khalid and Anirban Bhattacharya in 2016 under the draconian sedition act.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>

        <article id="m5" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/feehike.jpg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">Fee Must Fall</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">In 2019, when the the JNU Administration tried to impose massive fee hike on the students, DSF was the first organization to conduct meticulous research on the socio-economic composition of the JNU student community and bring out a detailed report on the Draft Hostel Manual 2019 and the impact of the fee hike on the JNU student community. DSF was also at the forefront of the protest in 2019 against Fee Hike and the Draft Hostel Manual which was led by the JNUSU.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>

        <article id="m6" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/occupyUGC.jpg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">Occupy UGC</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">DSF actively participated in the movement against the UGC's decision to cut down the Non-NET Fellowships in 2015; DSF then undertook a survey on fellowships, which showed the importance of fellowships in sustaining research in public universities.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>

        <article id="m7" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative mr-[50vw]">
            <img class="h-48 w-full object-cover lg:h-96" src="./files/pads.jpg" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">Pads Against Sexism</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb-2">In 2015, the DSF initiated the Pads Against Sexism campaign in JNU in solidarity with the campaign started by 19 year old Elone Kastrati in Germany which was further taken up by students from JMI and Delhi University as well. DSF comrades put up posters and sanitary pads with feminist quotes across the campus. The campaign needs to be also seen in the context of the concerted attack on women's right under the Modi government. The campaign was also a statement against the day-to-day sexism prevalent across spaces be it universities, media or the field of sports.</p>
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                </div>
            </div>
        </article>

        <!-- <article id="m8" class="bg-white shadow-lg min-w-[20rem] lg:min-w-[60%] relative mr-[50vw]">
            <img class="h-48 w-full or lg:w-full lg:h-96" src="http://via.placeholder.com/540x360" alt="">
            <div class="p-4 lg:absolute bottom-0 w-full lg:text-white lg:bg-gradient-to-t from-black/75 snap-center">
                <h3 class="font-rbto-cnsd font-bold text-xl text-center lg:text-left lg:text-3xl">Fight against Facism</h3>
                <div id="movement-description" class="lg:hidden">
                    <p class="text-justify mb:2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at libero modi.</p> -->
                    <!-- <a class="font-rbto-cnsd font-bold text-blue-600 underline lg:text-blue-300" href="#!">read more</a> -->
                <!-- </div>
            </div>
        </article> -->
    </div>

    <div class="text-4xl lg:text-8xl opacity-80 hidden lg:block">
        <button id="slide-left" class="absolute top-[55%] lg:top-[45%] z-10 left-5 lg:left-10"><i class="fa-solid fa-chevron-left text-white"></i></button>
        <button id="slide-right" class="absolute top-[55%] lg:top-[45%] z-10 right-5 lg:right-10"><i class="fa-solid fa-chevron-right text-white"></i></button>
    </div>

</section>