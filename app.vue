<script setup lang="ts">
    import { store } from "~/global/store"
    import { setBackground } from "~/global/background"

    const description =
        "My personal website - A portfolio of my best web development adventures"
    const title = "Gibson Murray"

    useSeoMeta({
        title: title,
        description: description,
        ogTitle: title,
        ogDescription: description,
        ogImage: "/og-image.jpg",
        ogUrl: "https://gibsonmurray.com",
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: "/twitter-image.jpg",
        twitterCard: "summary",
    })

    useHead({
        htmlAttrs: {
            lang: "en",
        },
        link: [
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon.ico",
            },
        ],
        titleTemplate: (titleChunk) => {
            return titleChunk
                ? `${titleChunk} | Gibson Murray`
                : "Gibson Murray"
        },
    })

    setBackground(store.bgColor)
</script>

<template>
    <NuxtPage />
</template>

<style>
    body {
        font-family: "Figtree", "Inter", sans-serif;
        color: #fff;
    }
</style>
