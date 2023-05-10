import { RouteRecordRaw } from "vue-router";

export const branchRouter: Array<RouteRecordRaw> = [
  {
    path: "/run",
    name: "run",
    component: () => import("../view/Branch/run/index.vue"),
  },
  {
    path: "/adventure",
    name: "adventure",
    component: () => import("../view/Branch/adventure/index.vue"),
  },
];
