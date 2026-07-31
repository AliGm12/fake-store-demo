<template>
  <div class="min-h-screen max-w-desktop mx-auto bg-[#E9EDF5]">
    <LayoutHeader />
    <main class="container mx-auto px-4 py-8 max-w-7xl">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
