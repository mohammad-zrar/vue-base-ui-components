import { createRouter, createWebHistory } from "vue-router";
// Pages
import HomePage from "./pages/HomePage.vue";
import ButtonsPage from "./pages/ButtonsPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import DialogPage from "./pages/DialogPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/buttons",
      name: "buttons",
      component: ButtonsPage,
    },
    {
      path: "/dialog",
      name: "dialog",
      component: DialogPage,
    },
    {
      path: "/auth",
      name: "auth",
      component: LoginPage,
    },
  ],
});

export default router;
