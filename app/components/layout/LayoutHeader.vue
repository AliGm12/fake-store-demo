<template>
  <div
    class="relative bg-white dark:bg-gray-900 rounded-2xl h-30 flex items-center justify-between gap-5 px-5 md:px-20 lg:px-40 py-4"
  >
    <div
      @click="toggleDark"
      class="absolute top-3 right-3 w-10 flex items-center justify-center"
    >
      <ClientOnly>
        <Moon
          v-if="colorMode.value === 'light'"
          :size="20"
          class="text-(--heading-color) cursor-pointer"
        />
        <Sun
          v-else
          :size="20"
          class="text-(--secondary-color) cursor-pointer"
        />
        <template #fallback>
          <div class="w-5 h-5" />
        </template>
      </ClientOnly>
    </div>

    <div class="lg:block w-26.75">
      <AppButton
        class="sm:hidden w-10 h-10 p-0 bg-white dark:bg-gray-900 border border-(--secondary-color) text-(--secondary-color) rounded-lg hover:bg-pink-50 dark:hover:bg-gray-800"
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
      class="sm:hidden w-10 h-10 p-0 bg-transparent border border-(--secondary-color) text-(--secondary-color) rounded-lg hover:bg-pink-50 dark:hover:bg-gray-800"
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
        class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-black/40 p-5 sm:hidden z-50"
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
import { MenuIcon, PhoneCall, Moon, Sun } from "~/components/icons";
const colorMode = useColorMode();

function toggleDark() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}

const mobileOpen = ref(false);
</script>

<style scoped></style>
