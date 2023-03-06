<script setup lang="ts">
import { reactive, computed } from "vue";
import { useAuthenticationStore } from "@/store/authentication/authentication";
import { useRoutingStore } from "@/store/routing/routing";

const authenticationStore = useAuthenticationStore();
const routingStore = useRoutingStore();

const state = reactive({
  tab: 0,
  tabItems: [
    { name: "Home", to: "/", sideNav: [] },
    { name: "vuetify", to: "/vuetify" },
  ],
});

const isAuthencated = computed<boolean>(
  () => authenticationStore.isAuthencatied
);

const signOut = () => {
  authenticationStore.signOutAsync();
  routingStore.redirectToRequestRoute();
};
</script>

<template>
  <v-app-bar name="app-bar" color="primary">
    <v-app-bar-title>
      <v-btn variant="plain" to="/">H.N.D</v-btn>
    </v-app-bar-title>

    <v-space />
    <template v-if="!isAuthencated">
      <v-btn variant="text" @click="$router.push('/login')">Login</v-btn>
    </template>
    <template v-else>
      <v-btn class="ma-1" variant="text" icon="mdi-acount"></v-btn>
      <v-btn variant="text" @click="signOut">Sign Out</v-btn>
    </template>

    <template v-if="isAuthencated" #extension>
      <v-tabs
        v-model="state.tab"
        fixed-tabs
        grow
        background-color="primary-darken-2"
      >
        <v-tab
          v-for="tabItem in state.tabItems"
          :key="tabItem.name"
          :title="tabItem.name"
          :to="tabItem.to"
        >
          {{ tabItem.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
