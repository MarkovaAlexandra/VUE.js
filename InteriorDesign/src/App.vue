<template>
  <!-- <HelloComponent />
  <FotoComponent />
  <ProductComponent /> -->
  <HeaderComponent />
  <ProjectsComponent />
  <CountsComponent />
  <ArticlesNewsHomeComponent />
  <FooterComponent />
  <hr>
  <HeaderComponent />
  <ArticlesNewsFullComponent />
  <FooterComponent />

  <hr>
  <HeaderComponent />
  <BlogComponent />
  <FooterComponent />
  <hr>
  <HeaderComponent />
  <OurProjectsComponent />
  <FooterComponent />
  <hr>
  <HeaderComponent />
  <ProjectDetailsComponent />
  <FooterComponent />
</template>

<script>
// import HelloComponent from './components/HelloComponent.vue';
// import FotoComponent from './components/FotoComponent.vue';
// import ProductComponent from './components/ProductComponent.vue';
import ArticlesNewsFullComponent from './components/ArticlesNewsFullComponent.vue';
import ArticlesNewsHomeComponent from './components/ArticlesNewsHomeComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import CountsComponent from './components/CountsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import OurProjectsComponent from './components/OurProjectsComponent.vue';
import ProjectDetailsComponent from './components/ProjectDetailsComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';




export default {
  components: { HeaderComponent, BlogComponent, FooterComponent, ProjectsComponent, CountsComponent, ArticlesNewsHomeComponent, ArticlesNewsFullComponent, OurProjectsComponent, ProjectDetailsComponent }
}
</script>

<style lang="scss"></style>
