<template>
  <nav
    class="flex items-center gap-6 font-medium text-[15px] text-nowrap drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)]"
  >
    <button
      v-for="item in navItems"
      :key="item.key"
      type="button"
      class="relative flex items-center gap-2"
      :class="
        activeItem === item.key ? 'text-(--secondary-color)' : 'text-[#0A2A51]'
      "
      @click="handleClick(item)"
    >
      <component :is="item.icon" :size="14" />
      <span class="cursor-pointer">{{ item.label }}</span>

      <span
        v-if="activeItem === item.key"
        class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--secondary-color)"
      />
    </button>
  </nav>
</template>

<script setup lang="ts">
import {
  Blocks,
  BookOpen,
  MessageCircleQuestion,
  Phone,
} from "~/components/icons";

interface NavItem {
  key: string;
  label: string;
  icon: unknown;
  to?: string;
}

const navItems: NavItem[] = [
  { key: "products", label: "لیست محصولات", icon: Blocks, to: "/" },
  { key: "consulting", label: "دریافت مشاوره", icon: BookOpen },
  { key: "faq", label: "سوالات متداول", icon: MessageCircleQuestion },
  { key: "contact", label: "تماس با ما", icon: Phone },
];

const activeItem = useState<string>("nav-active-item", () => "contact");

function handleClick(item: NavItem) {
  activeItem.value = item.key;
  if (item.to) {
    navigateTo(item.to);
  }
}
</script>
