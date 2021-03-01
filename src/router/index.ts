import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AdBanner from "@/components/AdBanner.vue";
import LandingPage from "@/components/LandingPage.vue";
import Login from "@/components/Login.vue";
import MainPage from "@/components/MainPage.vue";
import Overview from "@/components/Overview.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AdBanner",
    component: AdBanner
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/mainpage",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
