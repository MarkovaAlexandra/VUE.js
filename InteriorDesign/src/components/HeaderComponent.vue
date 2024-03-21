<template>
    <div>
        <header class="header">
            <div class="header-content center">
                <div class="logo"><img :src=logo alt="logo"> Interno</div>
                <div class="menu">
                    <ul class="menu-items">
                        <li v-for="link in links" :key="link.id" class="menu-item">
                            <router-link :to="link.url">{{ link.title }}</router-link>
                        </li>

                    </ul>
                </div>
            </div>
            <RouterView />
        </header>
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
    }
}

</script>

<style>
body {
    font-family: dm_serif_displayregular;
    font-weight: 400;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

img {
    max-width: 100%;
}

.center {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5px;
}

.header {
    padding: 44px 0 57px 0;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: dm_serif_displayregular;
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: #292F36;
    ;

}

.menu {}

.menu-items {
    display: flex;
    gap: 60px;
    list-style-type: none;
}

.menu-item {
    display: block;
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #292F36;
    text-decoration: none;


}
</style>