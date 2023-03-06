<script setup lang="ts">
import AppFooter from "@/components/page/AppFooter.vue";
import AppBar from "@/components/page/AppBar.vue";
import SystemBar from "@/layouts/SystemBar.vue";
import SideMenu from "@/layouts/SideMenu.vue";
import SnackBar from "@/components/SnackBar.vue";
</script>

<template>
  <v-app id="app">
    <SystemBar />
    <AppBar />
    <AppFooter />
    <SideMenu />
    <SnackBar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
