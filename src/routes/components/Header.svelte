<script>
    import { page } from "$app/stores";    
</script>

<header class="font-rbto-cnsd font-bold text-lg bg-gray-300 px-10 py-2 lg:flex justify-between items-center lg:text-xl">
        
    <div class="flex justify-between items-center">

        <div>
            <a href="/" class="lg:flex items-center gap-2">
                <div><img class="w-14 lg:w-20" src="/files/logo.png" alt="Logo"></div>
                <h1 class="hidden lg:block leading-tight">
                    <span class="block">democratic</span>
                    <span class="block">students'</span>
                    <span class="block">federation</span>
                </h1>
            </a>
        </div>

        <button id="navtoggle" class="lg:hidden" aria-label="Navigation Toggle">
            <span id="navtoggle-open"><i class="fa-solid fa-bars text-2xl"></i></span>
            <span id="navtoggle-close" class="hidden"><i class="fa-solid fa-xmark text-3xl"></i></span>
        </button>

    </div>

    <nav id="navmenu" class="hidden text-right lg:block">
        <ul class="lg:flex gap-8 items-center">
            <li><a class="navlink {$page.url.pathname === '/' ? 'active' : ''}" href="/">Home</a></li>
            <li><a class="navlink {$page.url.pathname === '/about' ? 'active' : ''}" href="/about">About</a></li>
            <li><a class="navlink {$page.url.pathname.includes('/releases') ? 'active' : ''}" href="/releases">Releases</a></li>
            <li><a class="navlink {$page.url.pathname.includes('/events') ? 'active' : ''}" href="/events">Events</a></li>
            <li><a class="navlink {$page.url.pathname.includes('/archive') ? 'active' : ''}" href="/archive">Archive</a></li>
            <li><a class="navlink {$page.url.pathname === '/contact' ? 'active' : ''}" href="/contact">Contact</a></li>
            <li class="mt-2 lg:mt-0 lg:hover:scale-105 transition-transform"><a class="navbutton bg-red-800 px-5 py-1 rounded text-white lg:px-10 lg:py-2" href="/join-us">JOIN US</a></li>
        </ul>
    </nav>

</header>