<template>
  <TheNavbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheNavbar from "./components/TheNavbar.vue";
</script>

<style scoped>
.container {
  margin: 5rem auto 2.5rem;
  width: 80%;
}
@media screen and (max-width: 481px) {
  .container {
    width: 90%;
  }
}
</style>
