import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "@/view/HomePageView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'HomePage', component: HomePageView },
  ]
});

export default router;