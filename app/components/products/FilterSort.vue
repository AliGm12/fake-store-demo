<template>
  <div
    class="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-6"
  >
    <div class="flex flex-col gap-3">
      <div
        class="flex justify-between items-center cursor-pointer select-none"
        @click="isSortOpen = !isSortOpen"
      >
        <span class="text-(--heading-color) dark:text-gray-300 text-[13px] font-medium"> مرتب سازی </span>

        <ChevronUp
          :size="16"
          class="text-(--secondary-text-color) dark:text-gray-500 transition-transform duration-200"
          :class="{ 'rotate-180': isSortOpen }"
        />
      </div>

      <div
        v-show="isSortOpen"
        class="flex flex-col gap-2 mt-1 pr-2 text-[12px] text-(--filter-option-active-color) dark:text-gray-300"
      >
        <label
          v-for="option in options"
          :key="option.value"
          class="flex items-center gap-3 cursor-pointer group"
        >
          <input
            v-model="selectedSortOption"
            type="radio"
            name="sort"
            :value="option"
            class="w-4 h-4 accent-(--secondary-color) dark:accent-pink-400 cursor-pointer"
          />

          <span
            :class="
              selectedSortOption?.value === option.value
                ? 'text-(--filter-option-active-color) dark:text-gray-200'
                : 'text-(--filter-option-inactive-color) dark:text-gray-500'
            "
          >
            {{ option.label }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronUp } from "~/components/icons";

const selectedSortOption = defineModel<SortOption | null>("selectedSortOption");
const props = defineProps<{
  options: SortOption[];
}>();
const isSortOpen = ref(true);
</script>
