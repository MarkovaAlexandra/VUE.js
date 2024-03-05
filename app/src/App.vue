<template>
  <!-- <HelloComponent />
  <FotoComponent />
  <ProductComponent /> -->
  <HeaderComponent />
  <BlogComponent />
  <FooterComponent />
</template>

<script>
// import HelloComponent from './components/HelloComponent.vue';
// import FotoComponent from './components/FotoComponent.vue';
// import ProductComponent from './components/ProductComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: { HeaderComponent, BlogComponent, FooterComponent }
}
</script>

<style lang="scss"></style>
