<template>
  <div
    v-if="filters.length > 0"
    class="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 mb-4 flex items-center justify-between"
  >
    <span class="text-(--heading-color) dark:text-gray-300 text-sm"> فیلترهای اعمال شده </span>

    <div class="flex gap-3">
      <div
        v-for="filter in filters"
        class="flex flex-row items-center bg-[#FCE5EE] dark:bg-pink-950 rounded-2xl gap-2.5 py-1.5 px-2"
        :key="filter.key"
      >
        <component :is="filter.icon" :size="16" class="text-(--heading-color) dark:text-pink-300" />
        <span class="text-sm text-(--heading-color) dark:text-pink-300">{{ filter.label }}</span>

        <button @click="$emit('remove', filter)">
          <XIcon :size="16" class="text-(--heading-color) dark:text-pink-300 cursor-pointer" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { XIcon } from "~/components/icons";

defineProps<{
  filters: ActiveFilter[];
}>();

const emit = defineEmits<{
  remove: [filter: ActiveFilter];
}>();
</script>
