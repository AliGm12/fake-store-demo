<template>
  <div
    v-if="filters.length > 0"
    class="w-full bg-white rounded-2xl p-6 mb-4 flex items-center justify-between"
  >
    <span class="text-[#445A74] text-sm"> فیلترهای اعمال شده </span>

    <div class="flex gap-3">
      <div
        v-for="filter in filters"
        class="flex flex-row items-center bg-[#FCE5EE] rounded-2xl gap-2.5 py-1.5 px-2"
        :key="filter.key"
      >
        <component :is="filter.icon" :size="16" />
        <span class="text-sm">{{ filter.label }}</span>

        <button @click="$emit('remove', filter)">
          <XIcon :size="16" />
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
