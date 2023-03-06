<script lang="ts">
export default {
    name:'TotalVuetifyIndex',
    inheritAttrs:false
}
</script>

<script setup lang="ts">
import CategoryIndexMenu from '@/components/CategoryIndexMenu.vue';
import { MenuItemInCategoryIndex } from "@/@types/menu";

const items:MenuItemInCategoryIndex[]=[
    {
        to:'/vuetify/total-vuetify',
        title:'Total Vuetify',
        description:'Ha Ha Ha'
    }
]

</script>

<template>
    <CategoryIndexMenu :items="items"/>
</template>