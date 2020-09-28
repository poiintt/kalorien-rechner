import Vue from "vue";
import VueRouter from "vue-router";
import AdBanner from "@/components/AdBanner";
import LandingPage from "@/components/LandingPage";
import Login from "@/components/Login";
import MainPage from "@/components/MainPage";
import Overview from "@/components/Overview";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/adbanner",
      name: "AdBanner",
      component: AdBanner,
    },
    {
      path: "/landingpage",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/mainpage",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview,
    },
  ],
});
