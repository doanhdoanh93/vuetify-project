<script setup lang="ts">
import { onMounted, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { getBreadcrumbsItems } from "@/router/helper";
import { useHeaderNameStore } from "@/store/header-name/header-name";

export interface BreadcrumbsItem {
  text: string;
  disable: boolean;
  to: string;
  exact?: boolean;
}
const headerName = useHeaderNameStore();

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
    {{ headerName.headerName }}
  </v-container>
</template>
