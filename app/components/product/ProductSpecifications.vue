<template>
  <div
    class="bg-white shadow-(--card-shadow) rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5"
  >
    <h2 class="text-xl font-bold text-gray-800">مشخصات فنی</h2>

    <div class="flex flex-col gap-3">
      <div
        v-for="row in specRows"
        :key="row.label"
        class="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden gap-2 sm:gap-3"
      >
        <div
          class="sm:w-28 sm:shrink-0 bg-[#F5F7FA] rounded-2xl sm:rounded-l-sm sm:rounded-r-none px-4 py-3.5 text-sm text-[#57728E] flex items-center"
        >
          {{ row.label }}
        </div>

        <div
          class="flex-1 bg-[#F5F7FA] rounded-2xl sm:rounded-r-sm sm:rounded-l-none px-4 py-3.5 text-[13px] text-[#30445B]"
        >
          <ul
            v-if="Array.isArray(row.value)"
            class="list-disc pr-4 flex flex-col gap-1"
          >
            <li v-for="(item, i) in row.value" :key="i">
              {{ item }}
            </li>
          </ul>

          <span v-else>
            {{ row.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: Product;
}>();

const specRows = computed(() => [
  {
    label: "قیمت",
    value: `${props.product.price} تومان`,
  },
  {
    label: "توضیحات",
    value: props.product.description,
  },
  {
    label: "دسته بندی",
    value: props.product.category,
  },
  {
    label: "رتبه",
    value: props.product.rating.rate,
  },
  {
    label: "تعداد",
    value: props.product.rating.count,
  },
]);
</script>
