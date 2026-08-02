<template>
  <nav class="flex items-center gap-2 text-xs sm:text-sm text-[#6783A0]">
    <NuxtLink
      to="/"
      class="flex items-center hover:text-(--secondary-color) transition"
    >
      <Home :size="16" />
    </NuxtLink>

    <ChevronLeft :size="14" />

    <NuxtLink
      to="/products"
      class="hover:text-(--secondary-color) font-bold transition"
    >
      لیست محصولات
    </NuxtLink>

    <ChevronLeft :size="14" />

    <span
      class="font-bold text-ellipsis text-nowrap overflow-hidden min-w-0 max-w-40 sm:max-w-none block"
    >
      {{ product.title }}
    </span>
  </nav>
</template>

<script setup lang="ts">
import { ChevronLeft, Home } from "~/components/icons";

defineProps<{
  product: Product;
}>();
</script>
