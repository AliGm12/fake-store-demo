<template>
  <NuxtLayout name="default">
    <div class="w-full flex items-center justify-center px-4">
      <div
        class="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-(--card-shadow) p-8 flex flex-col items-center gap-6 text-center"
      >
        <div
          class="w-20 h-20 rounded-2xl bg-pink-50 dark:bg-gray-800 flex items-center justify-center"
        >
          <SearchX :size="36" class="text-(--secondary-color)" />
        </div>

        <div class="flex flex-col gap-2">
          <h1 class="text-5xl font-bold text-(--heading-color)">
            {{ error?.statusCode ?? 404 }}
          </h1>
          <h2 class="text-lg font-semibold text-(--heading-color)">
            صفحه مورد نظر پیدا نشد
          </h2>
          <p class="text-sm text-(--secondary-text-color) leading-relaxed">
            متأسفانه صفحه‌ای که دنبالش می‌گردید وجود ندارد یا حذف شده است.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 w-full">
          <AppButton
            class="flex-1 bg-(--secondary-color)"
            @click="handleGoHome"
          >
            <Home :size="16" />
            بازگشت به صفحه اصلی
          </AppButton>

          <AppButton
            class="flex-1 bg-transparent border border-(--secondary-color) text-(--secondary-color) hover:bg-pink-50 dark:hover:bg-gray-800"
            @click="handleClear"
          >
            <RotateCcw :size="16" />
            تلاش مجدد
          </AppButton>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SearchX, Home, RotateCcw } from "~/components/icons";

const props = defineProps<{
  error: {
    statusCode?: number;
    statusMessage?: string;
  };
}>();

function handleGoHome() {
  clearError({ redirect: "/" });
}

function handleClear() {
  clearError();
}
</script>

<style scoped></style>
