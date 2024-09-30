// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: false },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@nuxt/fonts",
        "@nuxt/content",
    ],
    fonts: {
        families: [
            {
                name: "Figtree",
                provider: "google",
            },
        ],
    },
})
