<nav class="tabs is-boxed">
    <div class="container">
        <ul>
            <router-link tag='li' to="/" exact>
                <a >Home</a></router-link>
            {{--exact will tell to match exactly not just first letter '/'--}}

            <router-link tag='li' to="/about">
                <a>About</a>
            </router-link>

        </ul>
    </div>
</nav>