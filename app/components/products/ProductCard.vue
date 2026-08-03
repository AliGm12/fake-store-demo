<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-3xl shadow-sm hover:shadow-md dark:hover:shadow-black/30 transition-shadow duration-300 overflow-hidden flex flex-col p-2 h-full border border-gray-100 dark:border-gray-800"
  >
    <div class="w-full aspect-4/3 mb-4 overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-fit hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="flex flex-col grow px-1 justify-between">
      <h3
        class="text-right text-gray-800 dark:text-gray-200 font-bold text-sm leading-relaxed my-1 truncate w-full"
      >
        {{ product.title }}
      </h3>

      <AppButton
        @click="navigateTo(`/products/${product.id}`)"
        class="py-2 border border-(--main-bg-color) dark:border-gray-700 bg-transparent text-(--main-bg-color)"
      >
        <span class="text-xs md:text-sm text-(--secondary-color) text-nowrap"
          >مشاهده جزئیات</span
        >
        <ChevronLeft class="h-4 text-(--secondary-color)" />
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from "~/components/icons";
defineProps<{
  product: Product;
}>();
</script>

<style scoped></style>
