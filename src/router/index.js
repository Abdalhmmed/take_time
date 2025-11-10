import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "@/views/HomePageView.vue";
import MainPageView from "@/views/MainPageView.vue";
import LoginPageView from "@/views/LoginPageView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'HomePage', component: HomePageView },
    { path: '/MainPage', name: 'MainPage', component: MainPageView },
    { path: '/Loging', name: 'Loging', component: LoginPageView },

  ]
});

export default router;