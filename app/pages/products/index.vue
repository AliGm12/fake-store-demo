<!-- pages/products/index.vue -->
<template>
  <div class="w-[822px]">
    <div v-if="loading" class="text-center py-10 text-gray-500">
      در حال بارگذاری محصولات...
    </div>

    <div v-else-if="error" class="text-center py-10 text-red-500">
      خطا در دریافت محصولات: {{ error.message }}
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in products || []"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { products, loading, error } = useProducts();
</script>
