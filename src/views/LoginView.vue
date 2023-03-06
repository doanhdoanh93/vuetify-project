<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthenticationStore } from "@/store/authentication/authentication";

const authStore = useAuthenticationStore();
const router = useRouter();

const goHome = () => {
  authStore.signInAsync();
  router.replace({ path: "/" });
  return;
};
</script>

<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center">
                <h1 class="text-h5 font-weight-bold">Come back home</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center">
                <v-btn @click="goHome" variant="outlined" color="primary">Go Home</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
