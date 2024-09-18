// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image", "@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Figtree",
        provider: "google",
      },
    ],
  },
});
