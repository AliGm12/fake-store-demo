<template>
  <div class="flex flex-col gap-4 w-full">
    <ProductBreadcrumb v-if="product" :product="product" />

    <div v-else-if="productLoading" class="flex items-center gap-2">
      <USkeleton class="h-4 w-4 rounded-full" />
      <USkeleton class="h-4 w-24" />
      <USkeleton class="h-4 w-32" />
    </div>

    <!-- Loading -->
    <template v-if="productLoading">
      <div
        class="bg-white dark:bg-gray-900 shadow-(--card-shadow) rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 w-full"
      >
        <USkeleton class="h-5 w-2/3 sm:h-7" />
        <USkeleton class="w-full h-56 sm:h-80 rounded-2xl" />
      </div>
      <div
        class="bg-white dark:bg-gray-900 shadow-(--card-shadow) rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5"
      >
        <USkeleton class="h-5 w-24" />
        <div class="flex flex-col gap-3">
          <div
            v-for="i in 5"
            :key="i"
            class="flex flex-col sm:flex-row gap-2 sm:gap-3"
          >
            <USkeleton class="sm:w-28 sm:shrink-0 h-11 rounded-2xl" />
            <USkeleton class="flex-1 h-11 rounded-2xl" />
          </div>
        </div>
      </div>
    </template>
    <!-- Error -->
    <UAlert
      v-else-if="error"
      color="error"
      variant="soft"
      icon="i-lucide-alert-triangle"
      title="محصول یافت نشد"
      :description="
        error?.message ?? 'خطایی در دریافت اطلاعات محصول رخ داده است'
      "
    >
      <template #actions>
        <UButton color="error" variant="outline" size="sm" @click="refresh()">
          تلاش مجدد
        </UButton>
      </template>
    </UAlert>
    <template v-else-if="product">
      <ProductImageCard :product="product" />

      <ProductSpecifications :product="product" />
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const {
  data: product,
  pending: productLoading,
  error,
  refresh,
} = await useFetch<Product>(
  `https://fakestoreapi.com/products/${route.params.id}`,
);
</script>
