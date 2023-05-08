import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/Home.vue"),
    children: [
      {
        path: "/run",
        name: "run",
        component: () => import("../view/Branch/Run.vue"),
      },
      {
        path: "/adventure",
        name: "adventure",
        component: () => import("../view/Branch/Advernture.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
