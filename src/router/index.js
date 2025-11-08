import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "@/views/HomePageView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'HomePage', component: HomePageView },
  ]
});

export default router;