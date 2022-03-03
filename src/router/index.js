import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EncryptView from "../views/Encrypt.vue";
import DecryptView from "../views/Decrypt.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/encrypt",
      name: "encrypt",
      component: EncryptView,
    },
    {
      path: "/decrypt",
      name: "decrypt",
      component: DecryptView,
    },
  ],
});

export default router;
