<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  width: 50%;
  padding: 1rem;
  margin: auto;
  box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>
