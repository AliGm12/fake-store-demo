<template>
  <div
    class="bg-white dark:bg-gray-900 shadow-(--card-shadow) rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5"
  >
    <h1 class="text-lg sm:text-2xl font-semibold text-[#0A2A51] dark:text-gray-100">
      {{ product.title }}
    </h1>

    <div class="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-56 sm:h-80 object-contain"
      />

      <button
        type="button"
        class="absolute top-3 right-3 w-8 h-8 rounded-[13px] bg-[#00000080] text-white flex items-center justify-center hover:bg-gray-800/50 transition"
        @click="imageZoomOpen = true"
      >
        <ZoomIn :size="16" />
      </button>

      <UModal v-model:open="imageZoomOpen">
        <template #content>
          <div class="p-6">
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-contain"
            />
          </div>
        </template>
      </UModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZoomIn } from "~/components/icons";

defineProps<{
  product: Product;
}>();

const imageZoomOpen = ref(false);
</script>
