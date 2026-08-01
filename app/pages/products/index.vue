<template>
  <div class="flex flex-col lg:flex-row gap-6 w-full">
    <!--Sidebar Filters Section-->
    <div class="w-full lg:w-[266px] shrink-0">
      <div class="flex flex-col gap-4">
        <FilterSearch v-model:search-query="searchQuery" />
        <FilterSort
          v-model:selected-sort-option="selectedSortOption"
          :options="sortOptions"
        />
        <FilterCategory
          :category-counts="categoryCounts"
          v-model:selected-categories="selectedCategories"
        />
      </div>
    </div>
    <!--Main Section-->
    <div class="flex-1 max-w-[822px]">
      <ActiveFiltersBar :filters="activeFilters" @remove="removeFilter" />

      <div v-if="productsLoading" class="text-center py-10 text-gray-500">
        در حال بارگذاری محصولات...
      </div>

      <div v-else-if="productsError" class="text-center py-10 text-red-500">
        خطا در دریافت محصولات: {{ productsError.message }}
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in filteredProducts || []"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  products,
  loading: productsLoading,
  error: productsError,
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
