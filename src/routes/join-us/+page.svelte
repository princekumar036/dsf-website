<script lang="ts">
    import { onMount } from "svelte";
    import { enhance } from "$app/forms";

    // SET VALUE OF ALL OPTION ELEMENTS SAME AS INNER TEXT
    onMount(() => {
        document.querySelectorAll('option').forEach(option => {
            if (!option.value) {
                option.value = option.innerText
            }
        })
    })

    export let form
    let university:string,
        school:string

</script>

<svelte:head>
    <title>Join Us - DSF</title>
</svelte:head>

<main class="min-h-screen p-10 max-w-screen-md mx-auto">

        <div class="flex flex-col items-center justify-center">
            <img class="w-20 mx-auto block" src="./files/fist_265.svg" alt="">
            <h2 class="text-4xl font-rbto-cnsd font-bold text-center">Join Us</h2>
            <h6 class=" text-lg">Join Independent Students' Movement</h6>
            <h6 class=" mb-5 text-lg">Become a member of DSF</h6>
        </div>

    <form method="POST" class="flex flex-col gap-5 md:gap-10 my-10 p-10 md:p-20 rounded border" use:enhance >

        <label class="">Name <span class="text-red-500 text-sm">*</span>
            <input type="text" name="name" class="w-full" required>
        </label>

        <label>Email <span class="text-red-500 text-sm">*</span>
            <input type="email" name="email" class="w-full" required>
        </label>

        <label>Phone 
            <input type="number" name="phone" min="1000000000" max="9999999999" class="w-full">
        </label>

        <label>University <span class="text-red-500 text-sm">*</span>
            <select name="university" class="w-full"  bind:value={university} required>
                <option disabled selected>Select</option>
                <option value="JNU">Jawaharlal Nehru University</option>
                <option>Other</option>
            </select>
        </label>

        <label class="{university == 'Other' ? 'block' : 'hidden'}">University Name <span class="text-red-500 text-sm">*</span>
            <input type="text" name="university" class="w-full" value="{university == 'JNU' ? 'JNU' : ''}" required>
        </label>

        <label class="{university == 'JNU' ? 'block' : 'hidden'}">School
            <select name="school" class="w-full" bind:value={school}>
                <option disabled selected>Select</option>
                <option>School of International Studies</option>
                <option>School of Language Literature and Culture Studies</option>
                <option>School of Social Sciences</option>
                <option>School of Arts & Aesthetics</option>
                <option>School of Biotechnology</option>
                <option>School of Computational and Integrative Sciences</option>
                <option>School of Computer and Systems Sciences</option>
                <option>School of Engineering</option>
                <option>School of Environmental Sciences</option>
                <option>School of Life Sciences</option>
                <option>Atal Bihari Vajpayee School of Management and Entrepreneurship</option>
                <option>School of Physical Sciences</option>
                <option>School of Sanskrit and Indic Studies</option>
                <option>Centre for the Study of Law and Governance</option>
                <option>Special Centre for Disaster Research</option>
                <option>Special Centre for E-Learning</option>
                <option>Special Centre for Molecular Medicine</option>
                <option>Special Centre for Nanoscience</option>
                <option>Special Centre for National Security Studies</option>
                <option>Special Centre for the Study of North East India</option>
            </select>
        </label>

        <label class="{university == 'JNU' && (school == 'School of International Studies' || school == 'School of Language Literature and Culture Studies' || school == 'School of Social Sciences' ) ? 'block' : 'hidden'}">Centre
            <select name="centre" class="w-full {school == 'School of International Studies' ? 'block' : 'hidden'}">
                <option disabled selected>Select</option>
                <option>Centre for African Studies</option>
                <option>Centre for Canadian, US and Latin American Studies</option>
                <option>Centre for Comparative Politics and Political Theory</option>
                <option>Centre for East Asian Studies</option>
                <option>Centre for European Studies</option>
                <option>Centre for Indo-Pacific Studies</option>
                <option>Centre for Inner Asian Studies</option>
                <option>Centre for International Legal Studies</option>
                <option>Centre for International Politics, Organisation and Disarmament</option>
                <option>Centre for International Trade and Development</option>
                <option>Centre for Russian and Central Asian Studies</option>
                <option>Centre for South Asian Studies</option>
                <option>Centre for West Asian Studies</option>
            </select>

            <select name="centre" class="w-full {school == 'School of Language Literature and Culture Studies' ? 'block' : 'hidden'}">
                <option disabled selected>Select</option>
                <option>Centre of Arabic and African studies</option>
                <option>Centre for Chinese and South East Asian Studies</option>
                <option>Centre for English Studies</option>
                <option>Centre for French and Francophone Studies</option>
                <option>Centre of German Studies</option>
                <option>Centre of Indian Languages</option>
                <option>Centre for Japanese Studies</option>
                <option>Centre for Korean Studies</option>
                <option>Centre for Linguistics</option>
                <option>Centre of Persian and Central Asian Studies</option>
                <option>Centre of Russian Studies</option>
                <option>Centre of Spanish, Portuguese, Italian & Latin American</option>
            </select>

            <select name="centre" class="w-full {school == 'School of Social Sciences' ? 'block' : 'hidden'}">
                <option disabled selected>Select</option>
                <option>Centre for Economic Studies and Planning</option>
                <option>Centre for Media Studies</option>
                <option>Centre for Philosophy</option>
                <option>Centre for Political Studies</option>
                <option>Centre for Studies in Science Policy</option>
                <option>Centre for Women's Studies</option>
                <option>Centre for the Study of Discrimination and Exclusion</option>
                <option>Centre for the Study of Regional Development</option>
                <option>Centre for the Study of Social Systems</option>
                <option>Centre of Social Medicine and Community Health</option>
                <option>Zakir Husain Centre for Educational Studies</option>
            </select>
        </label>

        <label>Programme
            {#if university == 'JNU'}
                <select name="programme" class="w-full">
                    <option disabled selected>Select</option>
                    <option>BA</option>
                    <option>BTech</option>
                    <option>MA</option>
                    <option>MCA</option>
                    <option>MTech</option>
                    <option>MPhil</option>
                    <option>PhD</option>
                    <option>Certificate</option>
                    <option>Diploma</option>
                </select>
            {:else}
                <input type="text" name="programme" class="w-full">
            {/if}
        </label>

        <input type="submit" value="Submit" class="w-full bg-red-800 text-white font-bold p-2 cursor-pointer">

        {#if form?.missing}<p class="text-red-500 text-sm italic">* One or more required fields are missing</p>{/if}
    </form>
</main>