<script setup lang="ts">
import router from "@/router";
import { useTestStore } from "@/store/test/test";
import { reactive } from "vue";

const store = useTestStore();
const temp = store.test;
// store.$reset();
const state = reactive({
  vd: store.test,
});

const dkm = () => {
  if (store.status) {
    store.$reset();
  }
};
dkm();
const next = () => {
  store.saveTest("editTest");
  router.push("test2");
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        {{ state.vd }}
      </v-col>
    </v-row>
  </v-container>
  <v-container> Total Vuetify {{ $t("label.hello") }} </v-container>

  <v-row>
    <v-col class="d-flex justify-end">
      <v-btn variant="outlined" color="primary" @click="next">Tiếp theo</v-btn>
    </v-col>
  </v-row>
</template>
