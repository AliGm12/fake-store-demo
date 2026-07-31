<template>
  <footer dir="rtl" class="rounded-2xl overflow-hidden bg-white">
    <div class="grid grid-cols-3 sm:grid-cols-5 gap-10 px-16 py-10">
      <div class="col-span-2 hidden sm:flex items-end">
        <div class="mb-[10%] text-[13px]">
          هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
        </div>
      </div>
      <div>
        <h3 class="font-bold mb-6">دسترسی سریع</h3>

        <ul class="space-y-4 text-[13px] text-gray-600">
          <li class="text-pink-500">درباره ما</li>
          <li>بلاگ</li>
          <li>تماس با ما</li>
          <li>خدمات پس از فروش</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-6">راهنمای سایت</h3>

        <ul class="space-y-4 text-[13px] text-gray-600">
          <li>قوانین و مقررات</li>
          <li>دریافت مشاوره</li>
          <li>انتقادات و پیشنهادات</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-6">شبکه‌های اجتماعی</h3>

        <ul class="space-y-4 text-sm text-gray-600">
          <li
            v-for="social in socialMediaList"
            :key="social.name"
            class="flex items-center gap-2"
          >
            <component
              :is="social.icon"
              size="24"
              :style="{ color: social.color }"
            />
            <span>{{ social.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="bg-[#F8F9FC] rounded-t-2xl px-16 py-8 flex flex-col gap-7 items-center justify-between relative shadow-[0_2px_2px_0_rgba(0,0,0,0.08)]"
    >
      <p class="text-sm text-gray-500 text-center max-w-72 leading-6">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی برداری
        پیگرد قانونی دارد.
      </p>
      <!-- Social icons -->
      <div class="flex gap-6">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#F180A9] text-white transition-all duration-200 hover:-translate-y-0.5"
          :class="{
            '!bg-[#E20054]': social.active,
          }"
        >
          <component :is="social.icon" :size="14" />
        </a>
      </div>
      <!--ENamad and Samandehi-->
      <div
        class="absolute left-8 top-1/2 -translate-y-1/2 hidden sm:flex gap-3"
      >
        <img
          src="/images/footer/enamad.png"
          class="h-[72px] w-[72px] bg-white rounded-xl p-2"
          alt="نماد اعتماد"
        />
        <img
          src="/images/footer/samandehi.png"
          class="h-[72px] w-[72px] bg-white rounded-xl p-2"
          alt="ساماندهی"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  TelegramIcon,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "~/components/icons";
import type { Component } from "vue";

interface SocialLink {
  name: string;
  icon: Component;
  url?: string;
  color?: string;
  active?: boolean;
}

const socialMediaList: SocialLink[] = [
  {
    name: "تلگرام",
    icon: TelegramIcon,
    color: "#6783A0",
  },
  {
    name: "اینستاگرام",
    icon: Instagram,
    color: "#6783A0",
  },
  {
    name: "لینکدین",
    icon: Linkedin,
    color: "#6783A0",
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/",
    active: true,
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    url: "https://t.me/",
  },
];
</script>

<style scoped>
.social-icons {
  display: flex;
  gap: 12px;
}
</style>
