<template>
  <div
    class="relative bg-white rounded-2xl h-30 flex items-center justify-between gap-5 px-5 md:px-20 lg:px-40 py-4"
  >
    <div class="lg:block w-26.75">
      <AppButton
        class="sm:hidden w-11 h-11 p-0 bg-white border border-(--secondary-color) text-(--secondary-color) rounded-xl hover:bg-pink-50"
        @click="mobileOpen = !mobileOpen"
      >
        <MenuIcon :size="14" />
      </AppButton>
    </div>

    <HeaderNavbar class="hidden sm:flex" />

    <AppButton class="hidden sm:flex bg-(--secondary-color)">
      تماس
      <PhoneCall :size="14" />
    </AppButton>

    <AppButton
      class="sm:hidden w-11 h-11 p-0 bg-transparent border border-(--secondary-color) text-(--secondary-color) rounded-xl hover:bg-pink-50"
    >
      <PhoneCall class="text-(--secondary-color)" :size="18" />
    </AppButton>

    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-5 sm:hidden z-50"
      >
        <HeaderNavbar
          class="flex-col items-start gap-4"
          @click="mobileOpen = false"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon, PhoneCall } from "~/components/icons";

const mobileOpen = ref(false);
</script>

<style scoped></style>
