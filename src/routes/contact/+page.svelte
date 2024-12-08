<script lang="ts">
    import OfficeBearers from "../components/OfficeBearers.svelte";
    import Social from "../components/Social.svelte";


</script>

<main class="min-h-screen py-10 px-10 lg:px-32">
    <h2 class="text-4xl font-rbto-cnsd font-bold text-center">Contact Us</h2>

    <div class="grid lg:grid-cols-2 mt-10 px-10 lg:px-20 text-center lg:text-left">
        <div>
            <div class="font-rbto-cnsd text-lg">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <span>155, Ganga Hostel, JNU, New Delhi</span>
            </div>
            <div class="font-rbto-cnsd text-lg my-5">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:8113991612">8113991612</a>
            </div>
            <div class="font-rbto-cnsd text-lg">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:dsfjnuunit@gmail.com">dsfjnuunit@gmail.com</a>
            </div>

            <Social />
        </div>

        <div class="mt-10 lg:mt-0">
            <iframe title="Office location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.690236844445!2d77.1642297255641!3d28.549029026319605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc0890389e5%3A0x7434d1ed2d385dcb!2sGanga%20Hostel%20Rd%2C%20Uttarakhand%2C%20New%20Delhi%2C%20Delhi%20110067!5e0!3m2!1sen!2sin!4v1663683703275!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>


    <div class="text-center">
        <h6 class="mt-20 mb-10 font-rbto-cnsd font-bold text-center text-2xl">Contact our office bearers</h6>
    </div>

    <OfficeBearers />

</main>