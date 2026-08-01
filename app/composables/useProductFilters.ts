import {
  Search,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
  Tag,
  ArrowDown,
  ArrowUp,
} from "~/components/icons";

import type { Ref } from "vue";
import type { Product } from "~/types/product";
import type { ActiveFilter } from "~/types/filters";

export const sortOptions: SortOption[] = [
  {
    value: "count_asc",
    label: "تعداد: کم به زیاد",
    type: "count",
    direction: "asc",
    icon: ArrowUp,
  },
  {
    value: "count_desc",
    label: "تعداد: زیاد به کم",
    type: "count",
    direction: "desc",
    icon: ArrowDown,
  },
  {
    value: "rating_asc",
    label: "رتبه: کم به زیاد",
    type: "rating",
    direction: "asc",
    icon: ArrowUpNarrowWide,
  },
  {
    value: "rating_desc",
    label: "رتبه: زیاد به کم",
    type: "rating",
    direction: "desc",
    icon: ArrowDownNarrowWide,
  },
];

export const useProductFilters = (
  products: Ref<Product[] | undefined>,
  categories: Ref<string[] | undefined>,
) => {
  const searchQuery = ref<string>("");

  const selectedCategories = ref<string[]>([]);

  const selectedSortOption = ref<SortOption | null>(null);

  // category sidebar filters
  const categoryCounts = computed(() => {
    const productList = products.value ?? [];
    const categoryList = categories.value ?? [];

    return categoryList.map((category) => ({
      category,
      count: productList.filter((product) => product.category === category)
        .length,
    }));
  });

  const filteredProducts = computed(() => {
    if (!products.value) return [];

    let result = [...products.value];

    if (searchQuery.value.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );
    }

    if (selectedCategories.value.length) {
      result = result.filter((product) =>
        selectedCategories.value.includes(product.category),
      );
    }

    switch (selectedSortOption.value?.value) {
      case "count_asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "count_desc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating_asc":
        result.sort((a, b) => a.rating.rate - b.rating.rate);
        break;

      case "rating_desc":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    return result;
  });

  // Prepare active filters for display above products
  const activeFilters = computed<ActiveFilter[]>(() => {
    const filters: ActiveFilter[] = [];

    if (searchQuery.value) {
      filters.push({
        key: "search",
        label: searchQuery.value,
        type: "search",
        icon: Search,
      });
    }

    selectedCategories.value.forEach((category) => {
      filters.push({
        key: category,
        label: category,
        type: "category",
        icon: Tag,
      });
    });
    if (selectedSortOption.value) {
      filters.push({
        key: selectedSortOption.value.value,

        label: selectedSortOption.value.type === "count" ? "تعداد" : "رتبه",

        type: "sort",

        icon: selectedSortOption.value.icon,
      });
    }

    return filters;
  });

  // remove active filters for display above products
  const removeFilter = (filter: ActiveFilter) => {
    switch (filter.type) {
      case "search":
        searchQuery.value = "";
        break;

      case "category":
        selectedCategories.value = selectedCategories.value.filter(
          (item) => item !== filter.key,
        );
        break;

      case "sort":
        selectedSortOption.value = null;
        break;
    }
  };

  return {
    searchQuery,
    selectedCategories,
    selectedSortOption,
    filteredProducts,
    categoryCounts,
    activeFilters,
    removeFilter,
    sortOptions,
  };
};
