<script setup lang="ts">
import { useSnackBarStore } from "@/store/snackbar/snack-bar";

const store = useSnackBarStore();
</script>

<template>
  <div>
    <v-snackbar
      v-for="(item, i) in store.getQueue"
      :key="item.id"
      :model-value="i === 0"
      timeout="4000"
      @update:model-value="store.dequeue(item.id)"
    >
      {{ item.message }}
      <template #actions>
        <v-btn color="primary" variant="text" @click="store.dequeue(item.id)">
          SnackBar</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>
