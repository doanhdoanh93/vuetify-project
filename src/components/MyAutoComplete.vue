<script setup lang="ts">
import { reactive, watch } from "vue";
// import { VCombobox } from "vuetify/lib/components";
// import {SelectItemKey} from

export interface Props {
  modelValue: string | undefined;
  items?: Array<any>;
  itemTitle?: any;
  itemValue?: any;
  reloadItemsCallback?: (searchString: string) => Promise<Array<any>>;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  itemTitle: "value",
  itemValue: "value",
  reloadItemsCallback: undefined,
});

interface Emits {
  (event: "update:modelValue", modelValue: string | undefined): void;
}

const emit = defineEmits<Emits>();

const state = reactive({
  innerValue: props.modelValue,
  search: undefined,
  timeoutId: undefined,
  loading: false,
  items: props.items,
} as {
  innerValue: any;
  search: string | undefined;
  timeoutId: number | undefined;
  loading: boolean;
  items: Array<any>;
});

const onUpdateModelValue = (value: any): void => {
  if (value == null) {
    emit("update:modelValue", undefined);
    return;
  }

  emit("update:modelValue", value);
  return;
};

watch(
  () => state.search,
  (val) => {
    if (!val) {
      return;
    }
    if (val.length >= 2 && !state.loading) {
      reloadItems(val);
    }
  }
);

function reloadItems(value: string) {
  if (props.reloadItemsCallback === undefined) {
    return;
  }

  state.loading = true;
  props
    .reloadItemsCallback(value)
    .then((_items: any[]) => {
      state.items = _items;
      state.loading = false;
    })
    .catch(() => {
      console.log("ERROR");
    });
}

function isObjectType(item: unknown): boolean {
  return typeof item === "object" && item !== null;
}
</script>

<template>
  <V-Combobox
    v-model="state.innerValue"
    v-model:search="state.search"
    v-bind="$attrs"
    :loading="state.loading"
    :items="state.items"
    :item-title="props.itemTitle"
    :item-value="props.itemValue"
    clearable
    density="compact"
    variant="outlined"
    hide-details="auto"
    validate-on="blur"
    no-data-text="No data"
    @update:model-value="onUpdateModelValue"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>

    <template v-if="$slots['item'] === undefined" #item="slotProps">
      <v-list
        v-bind="slotProps.props"
        :title="slotProps.items?.raw?.value"
        :subtitle="slotProps.items?.raw?.text"
      ></v-list>
    </template>
  </V-Combobox>
</template>
