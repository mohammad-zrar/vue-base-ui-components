<template>
  <button v-if="!link" :class="color"><slot></slot></button>
  <router-link v-else :class="color" :to="to"><slot></slot></router-link>
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
  color: {
    type: String,
    required: false,
    default: "blue",
  },
});
</script>

<style scoped>
button,
a {
  padding: 0.6rem 0.8rem;
  border-radius: 7.5px;
  display: inline-block;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: background-color 0.2 ease;
  text-decoration: none;
  text-align: center;
}
.blue {
  background-color: #0d6efd;
  color: #fff;
}
.blue:hover,
primary:active {
  background-color: #0b62e5;
}
.red {
  background-color: #dc3545;
  color: #fff;
}
.red:hover {
  background-color: #c72333;
}
</style>
