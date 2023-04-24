import { RouteRecordRaw } from "vue-router";
import BreadcrumbsLayout from "@/layouts/BreadcrumbsLayout.vue";

import IndexView from "@/views/total-vuetify/Index.vue";
import TotalVuetify from '@/views/total-vuetify/TotalVuetify.vue'
import Test2 from '@/views/total-vuetify/Test2.vue'

export const TotalVuetifyRouter: RouteRecordRaw[] = [
  {
    path: "vuetify",
    component: BreadcrumbsLayout,
    children: [
      {
        path: "",
        name: "vuetify",
        component: IndexView,
        meta: {
          breadcrumbsTitle: "vuetify",
        },
      },
      {
        path: "total-vuetify",
        name: "total-vuetify",
        component: TotalVuetify,
        meta: {
          breadcrumbsTitle: "total-vuetify",
        },
      },
      {
        path: "test2",
        name: "test2",
        component: Test2,
        meta: {
          breadcrumbsTitle: "test2",
        },
      },
      
    ],
  },
];
