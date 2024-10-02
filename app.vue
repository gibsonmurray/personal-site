<script setup lang="ts">
    import $ from "jquery"

    const description =
        "My personal website - A portfolio of my best web development adventures"
    const title = "Gibson Murray"

    useSeoMeta({
        title: title,
        description: description,
        ogTitle: title,
        ogDescription: description,
        ogImage: "/og-image.jpeg",
        ogUrl: "https://gibsonmurray.com",
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: "/og-image.jpeg",
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

    onMounted(() => {
        $("body").css("background-color", "#000")
    })
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
