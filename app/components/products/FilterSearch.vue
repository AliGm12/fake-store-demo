<template>
  <div
    class="w-full bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-[0_2px_3px_0_rgba(0,0,0,0.03)] dark:shadow-[0_2px_3px_0_rgba(0,0,0,0.2)] flex flex-col gap-3"
  >
    <span class="text-(--heading-color) dark:text-gray-300 font-medium text-[13px] text-right"
      >فیلتر و جستجو</span
    >
    <div
      class="relative flex items-center w-full border border-pink-500 dark:border-pink-400 rounded-2xl bg-[#F8F9FA] dark:bg-gray-800 overflow-hidden"
    >
      <SearchIcon
        :size="16"
        class="text-(--secondary-color) dark:text-pink-400 absolute right-3 top-1/2 -translate-y-1/2 z-10"
      />
      <div
        class="absolute right-10 top-1/2 -translate-y-1/2 w-px h-7 bg-[#D1DBE8] dark:bg-gray-600 z-10"
      ></div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="جستجو..."
        class="w-full bg-transparent py-2.5 pl-10 pr-12 text-sm text-right outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
      />
    </div>
    <AppButton class="rounded-xl bg-(--secondary-color)">جستجو</AppButton>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from "~/components/icons";

const searchQuery = defineModel<string>("searchQuery");
</script>

<style scoped></style>