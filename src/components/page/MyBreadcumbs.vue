<script setup lang="ts">
import { onMounted, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { getBreadcrumbsItems } from "@/router/helper";

export interface BreadcrumbsItem {
  text: string;
  disable: boolean;
  to: string;
  exact?: boolean;
}

const state = reactive({
  breadcrumbs: [
    {
      text: "Home",
      disable: false,
      to: "/",
      exact: true,
    },
  ] as BreadcrumbsItem[],
});

const route = useRoute();

onMounted(() => {
  state.breadcrumbs = getBreadcrumbsItems(route.path);
});

watch(
  () => route.path,
  () => {
    state.breadcrumbs = getBreadcrumbsItems(route.path);
  }
);
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs
          :items="state.breadcrumbs"
          color="primary"
          divider=">"
        ></v-breadcrumbs>
      </v-col>
    </v-row>
  </v-container>
</template>
