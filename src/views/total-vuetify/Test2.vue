<script setup lang="ts">
import router from "@/router";
import { useTestStore } from "@/store/test/test";
import { reactive } from "vue";

const store = useTestStore();
const state = reactive({
  vd: store.getTest,
});

const next=()=>{
    store.$reset();
    router.push('total-vuetify')
}

const back=()=>{
    router.push('total-vuetify')
    store.backTest()
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        {{ state.vd }}
      </v-col>
    </v-row>
 
  <v-row>
    <v-col class="d-flex justify-end">
        <v-btn variant="outlined" color="primary" @click="back">Quay lại</v-btn>
        <v-btn variant="outlined" color="primary" @click="next">Tiếp theo</v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
