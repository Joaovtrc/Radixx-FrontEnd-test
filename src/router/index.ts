import CurrencyViewVue from "@/views/CurrencyView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "currencies",
      component: CurrencyViewVue,
    },
  ],
});

export default router;
