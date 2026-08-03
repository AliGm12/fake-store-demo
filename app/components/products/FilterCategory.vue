<template>
  <div
    class="w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-6"
  >
    <div class="flex flex-col gap-3">
      <div
        class="flex justify-between items-center cursor-pointer select-none"
        @click="isCategoryOpen = !isCategoryOpen"
      >
        <span class="text-(--heading-color) dark:text-gray-300 text-[13px] font-medium">دسته بندی</span>
        <ChevronUp
          :size="16"
          class="text-(--secondary-text-color) dark:text-gray-500 transition-transform duration-200"
          :class="{ 'rotate-180': isCategoryOpen }"
        />
      </div>

      <div v-show="isCategoryOpen" class="flex flex-col gap-3 mt-1">
        <template v-if="loading">
          <div
            v-for="i in 4"
            :key="i"
            class="flex items-center justify-end gap-3"
          >
            <USkeleton class="w-4 h-4 rounded shrink-0" />
            <USkeleton class="h-3 grow" />
            <USkeleton class="w-6 h-6 rounded-md shrink-0" />
          </div>
        </template>
        <label
          v-else
          v-for="category in categoryCounts"
          :key="category.category"
          class="flex items-center justify-end gap-3 cursor-pointer group"
        >
          <input
            v-model="selectedCategories"
            type="checkbox"
            :value="category.category"
            class="w-4 h-4 rounded-2xl border-gray-300 dark:border-gray-600 accent-(--secondary-color) dark:accent-pink-400 cursor-pointer shrink-0"
          />

          <span
            :class="
              selectedCategories?.includes(category.category)
                ? 'text-(--filter-option-active-color) dark:text-gray-200'
                : 'text-(--filter-option-inactive-color) dark:text-gray-500'
            "
            class="text-[12px] text-right grow"
          >
            {{ category.category }}
          </span>

          <span
            :class="[
              selectedCategories?.includes(category.category)
                ? 'bg-(--secondary-color) dark:bg-pink-500'
                : 'bg-[#141928] dark:bg-gray-700',
              'flex justify-center items-center text-[10px] text-white w-6 h-6 rounded-md tabular-nums shrink-0',
            ]"
          >
            {{ category.count }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ChevronUp } from "~/components/icons";
interface CategoryCount {
  category: string;
  count: number;
}
defineProps<{
  categoryCounts: CategoryCount[];
  loading?: boolean;
}>();

const selectedCategories = defineModel<string[]>("selectedCategories");
const isCategoryOpen = ref(true);
</script>
<style scoped></style>
