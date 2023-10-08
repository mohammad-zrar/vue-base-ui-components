<template>
  <button v-if="!link" class="primary"><slot></slot></button>
  <router-link v-else class="primary" :to="to"><slot></slot></router-link>
</template>

<script setup>
defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: Object,
    required: false,
    default: { name: "home" },
  },
});
</script>

<style scoped>
button,
a {
  padding: 0.6rem 0.8rem;
  border-radius: 7.5px;

  outline: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: background-color 0.2 ease;
  text-decoration: none;
  text-align: center;
}
.primary {
  background-color: #0d6efd;
  color: #fff;
}
.primary:hover,
primary:active {
  background-color: #0b62e5;
}
</style>
