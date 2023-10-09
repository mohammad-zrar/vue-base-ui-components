<template>
  <div class="spinner"></div>
</template>
<style scoped>
.spinner {
  width: 32px;
  height: 32px;
  border: 6px dotted blue;

  margin: 1rem auto;
  border-radius: 50%;
  animation: spin 2.5s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
