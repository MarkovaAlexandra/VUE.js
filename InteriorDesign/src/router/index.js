import { createRouter, createWebHistory } from "vue-router";
import HomePageComponent from "@/components/HomePageComponent.vue";
import BlogPageComponent from "@/components/BlogPageComponent.vue";
import ProjectPageComponent from "@/components/ProjectPageComponent.vue";
import ProjectDetailsComponent from "@/components/ProjectDetailsComponent.vue";
import BlogComponent from "@/components/BlogComponent.vue";
import NotFoundComponent from '@/components/NotFoundComponent.vue';



const routes = [
    {
        path: "/",
        name: 'Home',
        component: HomePageComponent,
    },
    {
        path: "/blog",
        name: 'Blog',
        component: BlogPageComponent,
    },
    {
        path: "/projects",
        name: "Projects",
        component: ProjectPageComponent,
    },
    {
        path: "/project/details",
        name: "ProjectDetails",
        component: ProjectDetailsComponent,
    },
    {
        path: "/blog/details",
        name: "BlogDetails",
        component: BlogComponent,
    },
    {
        path: "/:CatchAll(.*)",
        name: 'NotFoundPage',
        component: NotFoundComponent,
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        }
    }
})

export default router;