<template>
  <div class="min-h-screen max-w-desktop mx-auto bg-(--main-bg-color) dark:bg-gray-950">
    <LayoutHeader />
    <main
      class="container mx-auto px-4 pt-6 pb-16 max-w-6xl flex justify-center"
    >
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
