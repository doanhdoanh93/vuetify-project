<script setup lang="ts">
import { computed, reactive } from "vue";

import { NavigationItem } from "@/store/sidenav/sidenav.model";
import { useAuthenticationStore } from "@/store/authentication/authentication";
import { DateUtil } from "@/shared/helpers/date-helper";

const authenticationStore = useAuthenticationStore();

const state = reactive({
  bizDate: new Date(),
  navItem: [
    {
      name: "Home",
      to: "/",
      children: [
        {
          name: "tab",
          to: "/tab",
        },
      ],
    },
    {
      name: "system",
      to: "/system",
    },
  ] as NavigationItem[],
});

//computed
const isAuthenticated = computed<boolean>(
  () => authenticationStore.isAuthencatied
);

const bizDateString = computed<string>(() => {
  return state.bizDate
    ? `Time: ${DateUtil.formatToDate(state.bizDate)}`
    : "Time:...";
});
</script>
<template>
  <v-navigation-drawer
    v-if="isAuthenticated"
    app
    name="side-nav"
    color="surface"
    class="thin-scroll-bar"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-clock"
        :title="bizDateString"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="comfortable" nav active-color="primary">
      <template v-for="item in state.navItem" :key="item.name">
        <v-list-group v-if="item.children">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="item.name"></v-list-item>
          </template>

          <template v-for="child in item.children" :key="child.name">
            <template v-if="child.children">
              <v-list-group v-if="child.children">
                <template #activator="{ props }">
                  <v-list-item v-bind="props" :title="item.name"></v-list-item>
                </template>

                <v-list-item
                  v-for="grandchild in child.children"
                  :key="grandchild.name"
                  :title="grandchild.name"
                  :value="grandchild.name"
                  :to="grandchild.to ?? '/not-found'"
                >
                </v-list-item>
              </v-list-group>
            </template>

            <template v-else>
              <v-list-item
                :title="child.name"
                :value="child.name"
                :to="child.to ?? '/not-found'"
              ></v-list-item>
            </template>
          </template>
        </v-list-group>

        <v-list-item
          v-else
          :title="item.name"
          :value="item.name"
          :to="item.to"
        ></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
