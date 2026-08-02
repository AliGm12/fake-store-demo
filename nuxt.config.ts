// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: true,
  },
  routeRules: {
    "/": { redirect: "/products" },
  },
  imports: {
    dirs: ["types"],
  },
  css: ["~/assets/styles/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  components: [
    {
      path: "~/components/common",
      pathPrefix: false,
    },
    {
      path: "~/components/layout",
      pathPrefix: false,
    },
    {
      path: "~/components/products",
      pathPrefix: false,
    },
    {
      path: "~/components/product",
      pathPrefix: false,
    },
  ],
});
