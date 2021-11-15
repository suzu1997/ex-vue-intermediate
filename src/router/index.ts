import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/baseballTeamList",
    component: () => import("../views/BaseballTeamList.vue"),
  },
  {
    path: "/baseballTeamDetail/:id",
    component: () => import("../views/BaseballTeamDetail.vue"),
  },
  {
    path: "/searchHotel",
    component: () => import("../views/SearchHotel.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
