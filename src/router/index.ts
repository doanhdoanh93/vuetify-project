import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import SimpleLayout from "@/layouts/SimpleLayout.vue";
// import EmptyLayout from "@/layouts/EmptyLayout.vue";
import NotFound from "@/layouts/NotFound.vue";
import LoginView from '@/views/LoginView.vue'

// import Index from "@/views/total-vuetify/Index.vue";

import { TotalVuetifyRouter } from "@/router/total-vuetify/total-vuetify";

let _routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
        meta: {
          breadcrumbsTitle: "Home",
        },
      },
      // {
      //   path: "vuetify",
      //   name: "vuetify",
      //   component: Index,
      //   meta: {
      //     breadcrumbsTitle: "vuetify",
      //   },
      // },
      ...TotalVuetifyRouter,
    ],
  },
  {
    path: "/login",
    component: SimpleLayout,
    children: [
      {
        path: "",
        name: "login",
        component: LoginView,
      },
    ],
  },
];

_routes = _routes.concat([
  {
    path: "/:catchAll(.*)",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "not-found",
        component: NotFound,
      },
    ],
  },
]);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: _routes,
});

export const routes = _routes;
export default router;
