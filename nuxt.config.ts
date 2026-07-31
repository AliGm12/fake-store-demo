// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/styles/main.scss"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components/common",
      pathPrefix: false,
    },
    {
      path: "~/components/layout",
      pathPrefix: false,
    },
  ],
});
