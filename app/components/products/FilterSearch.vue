<template>
  <div
    class="w-full bg-white rounded-2xl p-4 shadow-[0_2px_3px_0_rgba(0,0,0,0.03)] flex flex-col gap-3"
  >
    <span class="text-[#445A74] font-medium text-[13px] text-right"
      >فیلتر و جستجو</span
    >
    <div
      class="relative flex items-center w-full border border-pink-500 rounded-2xl bg-[#F8F9FA] overflow-hidden"
    >
      <SearchIcon
        :size="16"
        class="text-[#E20054] absolute right-3 top-1/2 -translate-y-1/2 z-10"
      />
      <div
        class="absolute right-10 top-1/2 -translate-y-1/2 w-[1px] h-7 bg-[#D1DBE8] z-10"
      ></div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="جستجو..."
        class="w-full bg-transparent py-2.5 pl-10 pr-12 text-sm text-right outline-none text-gray-700 placeholder-gray-400"
      />
    </div>
    <AppButton variant="danger">جستجو</AppButton>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from "~/components/icons";

const searchQuery = defineModel<string>("searchQuery");
</script>

<style scoped></style>
