<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    @click="onClick"
    class="app-btn"
    :class="[
      variant,
      variant !== 'icon-outline' ? size : '',
      {
        'opacity-50 cursor-not-allowed': disabled || loading,
        'inline-flex': true,
      },
    ]"
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
interface Props {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "ghost" | "icon-outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
}

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function onClick(event: MouseEvent) {
  if (props.loading || props.disabled) return;

  emit("click", event);
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
});
</script>

<style scoped>
.app-btn {
  @apply items-center justify-center gap-2 rounded-xl font-medium transition
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500;
}

/* sizes */
.sm {
  @apply px-4 py-1.5 text-sm;
}
.md {
  @apply px-7 py-2.5 text-sm;
}
.lg {
  @apply px-8 py-3 text-base;
}

/* variants */
.primary {
  @apply bg-blue-600 text-white hover:opacity-90;
}
.secondary {
  @apply bg-gray-100 text-gray-800 hover:bg-gray-200;
}
.danger {
  @apply bg-[#E20054] text-white hover:opacity-90;
}
.ghost {
  @apply bg-transparent text-gray-800 hover:bg-gray-100;
}
.icon-outline {
  @apply bg-white border border-pink-600 text-pink-600 rounded-xl w-11 h-11 p-0 hover:bg-pink-50;
}
</style>
