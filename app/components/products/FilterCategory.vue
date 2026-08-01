<template>
  <div
    class="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-6"
  >
    <div class="flex flex-col gap-3">
      <div
        class="flex justify-between items-center cursor-pointer select-none"
        @click="isCategoryOpen = !isCategoryOpen"
      >
        <span class="text-[#445A74] text-[13px] font-medium">دسته بندی</span>
        <ChevronUp
          :size="16"
          class="text-[#6783A0] transition-transform duration-200"
          :class="{ 'rotate-180': isCategoryOpen }"
        />
      </div>

      <div v-show="isCategoryOpen" class="flex flex-col gap-3 mt-1">
        <label
          v-for="category in categoryCounts"
          :key="category.category"
          class="flex items-center justify-end gap-3 cursor-pointer group"
        >
          <input
            v-model="selectedCategories"
            type="checkbox"
            :value="category.category"
            class="w-4 h-4 rounded-2xl border-gray-300 accent-[#E20054] cursor-pointer shrink-0"
          />

          <span
            :class="
              selectedCategories?.includes(category.category)
                ? 'text-[#344456]'
                : 'text-[#647E9A]'
            "
            class="text-[12px] text-right flex-grow"
          >
            {{ category.category }}
          </span>

          <span
            :class="[
              selectedCategories?.includes(category.category)
                ? 'bg-[#E20054]'
                : 'bg-[#141928]',
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
}>();

const selectedCategories = defineModel<string[]>("selectedCategories");
const isCategoryOpen = ref(true);
</script>
<style scoped></style>
