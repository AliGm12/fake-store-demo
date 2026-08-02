<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    @click="onClick"
    :class="buttonClasses"
  >
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <slot v-else />
  </button>
</template>
<script setup lang="ts">
import { twMerge } from "tailwind-merge";

interface Props {
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  class?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "md",
  disabled: false,
  loading: false,
  class: "",
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function onClick(event: MouseEvent) {
  if (props.loading || props.disabled) return;
  emit("click", event);
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition bg-blue-600 text-white cursor-pointer hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500";

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-7 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const buttonClasses = computed(() =>
  twMerge(
    baseClasses,
    sizeClasses[props.size!],
    props.disabled || props.loading ? "opacity-50 cursor-not-allowed" : "",
    props.class,
  ),
);
</script>
