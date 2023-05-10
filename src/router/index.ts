import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { branchRouter } from "./branch";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/Home.vue"),
  },
  ...branchRouter,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
