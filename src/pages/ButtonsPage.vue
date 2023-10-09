<template>
  <h1>Buttons</h1>

  <base-card>
    <div class="buttons">
      <div>
        <base-button link :to="{ name: 'home' }">Link</base-button>
      </div>
      <div>
        <base-button>Button</base-button>
      </div>
    </div>
  </base-card>
</template>

<script setup>
import BaseButton from "../components/ui/BaseButton.vue";
import BaseCard from "../components/ui/BaseCard.vue";
</script>
<style scoped>
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
