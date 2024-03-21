<template>
    <div>
        <ProjectsComponent />
        <CountsComponent />
        <ArticlesNewsHomeComponent />
    </div>
</template>


<script>
import ProjectsComponent from './ProjectsComponent.vue';
import CountsComponent from './CountsComponent.vue';
import ArticlesNewsHomeComponent from './ArticlesNewsHomeComponent.vue';


export default {
    components: {
        ProjectsComponent,
        CountsComponent,
        ArticlesNewsHomeComponent,
    }
}
</script>

