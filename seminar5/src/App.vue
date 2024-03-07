<template>
  <AuthComponent :isAuth="true" />
  <UserListComponent />
  <MortageCalcComponent />
  <ProductDetails />
</template>

<script>
import AuthComponent from './components/AuthComponent.vue';
import MortageCalcComponent from './components/MortageCalcComponent.vue';
import ProductDetails from './components/ProductDetails.vue';
import UserListComponent from './components/UserListComponent.vue';

export default {
  name: 'App',
  components: {
    AuthComponent,
    UserListComponent,
    MortageCalcComponent,
    ProductDetails
  }
}

</script>


