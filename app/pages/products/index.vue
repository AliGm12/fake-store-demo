<template>
  <div class="flex flex-col sm:flex-row gap-6 w-full">
    <!--Sidebar Filters Section-->
    <div class="w-full sm:w-66.5 shrink-0">
      <div class="flex flex-col gap-4">
        <FilterSearch v-model:search-query="searchQuery" />
        <FilterSort
          v-model:selected-sort-option="selectedSortOption"
          :options="sortOptions"
        />
        <FilterCategory
          :category-counts="categoryCounts"
          :loading="categoriesLoading"
          v-model:selected-categories="selectedCategories"
        />
      </div>
    </div>
    <!--Main Section-->
    <div class="flex-1 max-w-205.5">
      <ActiveFiltersBar :filters="activeFilters" @remove="removeFilter" />

      <div
        v-if="productsLoading"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div v-for="i in 12" :key="i" class="flex flex-col gap-3">
          <USkeleton class="h-56 w-full rounded-lg" />
          <USkeleton class="h-4 w-3/4" />
          <USkeleton class="h-4 w-1/2" />
        </div>
      </div>

      <UAlert
        v-else-if="productsError"
        color="error"
        variant="soft"
        icon="i-lucide-alert-triangle"
        title="خطا در دریافت محصولات"
      >
        <template #actions>
          <AppButton
            class="border border-red-500 dark:border-red-500 bg-transparent text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            size="sm"
            @click="refresh()"
          >
            تلاش مجدد
          </AppButton>
        </template>
      </UAlert>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in filteredProducts || []"
          :key="product.id"
          :product="product"
        />
      </div>
      <UEmpty
        v-if="(filteredProducts?.length ?? 0) === 0"
        icon="i-lucide-search-x"
        title="نتیجه‌ای پیدا نشد"
        description="محصولی با این فیلترها یافت نشد. فیلترهای خود را تغییر دهید."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  products,
  loading: productsLoading,
  error: productsError,
  refresh,
} = useProducts();

const {
  categories,
  loading: categoriesLoading,
  error: categoriesError,
} = useCategories();

const {
  searchQuery,
  selectedCategories,
  selectedSortOption,
  categoryCounts,
  filteredProducts,
  activeFilters,
  removeFilter,
  sortOptions,
} = useProductFilters(products, categories);
</script>
