<script setup lang="ts">
import { MenuItemInCategoryIndex } from "@/@types/menu";

export interface Props {
  items: MenuItemInCategoryIndex[];
}
const props = defineProps<Props>();
</script>

<template>
    <v-container>
        <v-row v-for="item in props.items" :key="item.title">
            <v-col cols="">
                <router-link :to="item.to">{{ item.title }}</router-link>
            </v-col>
            <v-col>
                <span v-html="item.description"></span>
            </v-col>
        </v-row>
    </v-container>
</template>