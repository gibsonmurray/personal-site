<script setup>
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
    });
</script>

<template>
    <NuxtPage />
</template>

<style>
    body {
        font-family: "Figtree", "Inter", sans-serif;
        background-color: #101010;
        color: #fff;
    }
</style>
