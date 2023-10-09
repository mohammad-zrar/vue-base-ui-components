<template>
  <h1>Login</h1>
  <base-card>
    <form @submit.prevent="login">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>

      <base-dialog :show="showDialog" @close="closeDialog">
        <template #header>
          <h2>Authenticating</h2>
        </template>
        <template #body>
          <BaseSpinner />
        </template>
      </base-dialog>
      <base-button>Login</base-button>
    </form>
  </base-card>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "../components/ui/BaseCard.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseDialog from "../components/ui/BaseDialog.vue";
import BaseSpinner from "../components/ui/BaseSpinner.vue";

const showDialog = ref(false);

function login() {
  showDialog.value = true;
}
function closeDialog() {
  showDialog.value = false;
}
</script>

<style scoped>
.form-control {
  display: grid;
  padding: 1rem;
}
.form-control label {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}
.form-control input {
  padding: 0.25rem 0.4rem;
  font-size: 1rem;
  outline: none;
  border: 1px solid #4444aa;
  border-radius: 4px;
}
.form-control input:focus {
  box-shadow: 0px 0px 5px #4444ff;
}
</style>
