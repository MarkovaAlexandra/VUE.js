<template>
    <div>
        <footer class="footer">
            <div class="footer-content center">
                <div class="logos">
                    <div class="logo"><img :src=logo alt="logo"> Interno</div>

                    <div class="logos-text">It is a long established fact that a reader<br> will be distracted lookings
                    </div>
                    <div class="icons">
                        <a target="_blank" href="https://www.twitter.com"><i
                                class="fa-brands fa-twitter"></i><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        <a target="_blank" href="https://www.linkedin.com"><i class="fa-brands fa-linkedin-in"></i> </a>


                    </div>
                </div>
                <div class="menu-pages">
                    <ul>Pages
                        <li v-for="link in links" :key="link.id"><router-link :to="link.url" class="footer-menu-link">{{
                            link.title }}</router-link> </li>

                    </ul>
                </div>
                <div class="contacts">
                    <div class="contacts-title">Contact</div>
                    <p class="contacts-text">55 East Birchwood Ave.<br> Brooklyn, New York 11201</p>
                    <p class="contacts-text">contact@interno.com
                    </p>
                    <p class="contacts-text">(123) 456 - 7890</p>
                </div>
            </div>
        </footer>
    </div>
</template>


<script>
export default {
    data() {
        return {
            logo: require("@/assets/imgInterior/Logo.svg"),
            links: [
                {
                    id: 1,
                    title: 'Home',
                    url: '/',
                },
                {
                    id: 2,
                    title: 'Blog',
                    url: '/blog',
                },
                {
                    id: 3,
                    title: 'Projects',
                    url: '/projects',
                },
            ]
        }
    },
}
</script>


<style>
.footer {
    margin-top: 96px;
    margin-bottom: 134px;
}

.footer-content {

    display: flex;
    justify-content: space-between;
}

.logos {
    width: 33%;
}

.logo {}

.logos-text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;

    text-align: left;
    margin-bottom: 31px;

}

.icons {}

.fa-brands {
    padding-right: 54px;
    color: #292F36;

    transition: color 0.3s;
}

.fa-brands:hover {
    color: #CDA274;
}

.menu-pages {
    width: 33%;
    padding-left: 8%;
    font-family: dm_serif_displayregular;

    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #292F36;
    ;
}

.footer-menu-link {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 66px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #292F36;
    ;

}

.contacts {
    width: 33%;
    padding-left: 12%;

}

.contacts-title {
    font-family: 'dm_serif_displayregular';
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #292F36;

    margin-bottom: 26px;

}

.contacts-text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #292F36;
    margin-bottom: 26px;

}
</style>