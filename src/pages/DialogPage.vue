<template>
  <h1>Dialog</h1>
  <base-card>
    <div class="">
      <base-button @click="openDialog">Try Dialog </base-button>
    </div>
  </base-card>
  <base-dialog v-if="showDialog" @close="closeDialog">
    <template #header>
      <h2>Testing Dialog</h2>
    </template>
    <template #body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        nostrum ullam maxime est doloribus. Hic est minus optio excepturi nulla,
        voluptate suscipit placeat. Quam tempore excepturi optio quo quidem
        assumenda?
      </p>
    </template>
    <template #actions>
      <base-button color="red" @click="closeDialog">Close</base-button>
    </template>
  </base-dialog>
</template>

<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseDialog from "../components/ui/BaseDialog.vue";
import { ref } from "vue";
const showDialog = ref(false);
function closeDialog() {
  showDialog.value = false;
}
function openDialog() {
  showDialog.value = true;
}
</script>

<style scoped>
div {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
