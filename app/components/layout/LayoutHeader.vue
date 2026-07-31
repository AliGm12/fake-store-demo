<template>
  <div
    class="relative bg-white rounded-2xl h-[120px] flex items-center justify-between gap-5 px-5 md:px-20 lg:px-40 py-4"
  >
    <div class="lg:block w-[107px]">
      <AppButton
        variant="icon-outline"
        class="sm:!hidden"
        aria-label="منو"
        @click="mobileOpen = !mobileOpen"
      >
        <MenuIcon :size="14" />
      </AppButton>
    </div>
    <HeaderNavbar class="hidden sm:flex" />
    <AppButton variant="danger" class="!hidden sm:!flex">
      تماس
      <PhoneCall :size="14" />
    </AppButton>
    <AppButton variant="icon-outline" class="sm:!hidden" aria-label="تماس">
      <PhoneCall :size="18" />
    </AppButton>
  </div>
</template>
<script setup lang="ts">
import { MenuIcon, PhoneCall } from "~/components/icons";
const mobileOpen = ref(false);
</script>

<style scoped></style>
