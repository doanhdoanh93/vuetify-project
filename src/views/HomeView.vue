<script setup lang="ts">
import MyAutoComplete from "@/components/MyAutoComplete.vue";
import { reactive } from "vue";

export interface CodeValue {
  value: string;
  text: string;
}

const items = [
  { value: "1", text: "ha1" },
  { value: "2", text: "ha2" },
  { value: "3", text: "ha3" },
] as CodeValue[];
const state = reactive({
  ti18n: "",
  vd1: "California",
  vd: "2",
});

const getText = (item: CodeValue) => {
  return item.value;
};
</script>

<template>
  <!-- <PageTitle/> -->
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-combobox
          v-model="state.vd1"
          label="VD1"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          density="compact"
          variant="outlined"
          hide-details="auto"
          validate-on="blur"
          no-data-text="No data"
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12"> Home </v-col>
      <v-col cols="2">
        <MyAutoComplete
          v-model="state.vd"
          :items="items"
          :item-title="getText"
          :item-value="getText"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col> Test validate </v-col>
      <v-col>
        {{ state.ti18n }}
      </v-col>
    </v-row>
  </v-container>
</template>
