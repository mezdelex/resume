import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: () => import("@/views/Projects.vue"),
      path: "/",
    },
  ],
});
