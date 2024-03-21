<template>
    <nav>
        <router-link v-for="link in links" :key="link.id" :to="link.url">{{ link.title }}</router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: 'header',
                    url: "/",
                },
                {
                    id: 2,
                    title: 'footer',
                    url: "/footer",
                },
                {
                    id: 3,
                    title: 'component3',
                    url: "/component3",
                },
            ]
        }
    }
}
</script>