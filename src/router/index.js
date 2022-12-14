import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("../views/MainPage.vue"),
    },
    {
      path: "/main",
      component: () => import("../views/MainPage.vue"),
    },
    {
      path: "/movie",
      component: () => import("../views/MoviePage.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/MyInformation.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});

export default router;
