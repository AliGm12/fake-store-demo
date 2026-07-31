<template>
  <nav
    class="flex items-center gap-6 font-medium text-[15px] text-nowrap drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)]"
  >
    <NuxtLink to="#" class="flex items-center gap-2">
      <Blocks :size="14" />
      <span>لیست محصولات</span>
    </NuxtLink>
    <NuxtLink to="#" class="flex items-center gap-2">
      <BookOpen :size="14" />
      <span>دریافت مشاوره</span>
    </NuxtLink>
    <NuxtLink to="#" class="flex items-center gap-2">
      <MessageCircleQuestion :size="14" />
      <span>سوالات متداول</span>
    </NuxtLink>
    <NuxtLink
      to="#"
      class="flex items-center gap-2 rounded-full text-pink-700"
      active-class="text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
    >
      <Phone :size="14" />
      <span>تماس با ما</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import {
  Blocks,
  BookOpen,
  MessageCircleQuestion,
  Phone,
} from "~/components/icons";
</script>

<style scoped></style>
