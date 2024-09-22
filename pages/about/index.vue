<script setup lang="ts">
    import type { Project } from "@/types"
    import gsap from "gsap"
    import $ from "jquery"
    import { store } from "~/pages/store"

    const route = useRoute()
    const entry = route.path.split("/").pop()
    const data = store.projects.find((p) => p.path === "/" + entry)

    const { color } = data || {}

    onMounted(() => {
        $("body").css("background-color", color!)

        gsap.fromTo(
            "#about > *",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                duration: 1,
                delay: 1,
                y: 0,
                ease: "power1.out",
                stagger: 0.1,
            },
        )
    })
</script>

<template>
    <div
        class="about-page flex min-h-svh w-screen flex-col items-center justify-start"
        :style="`background-color: ${color}`"
    >
        <ContentDoc
            id="about"
            path="/about"
            class="container prose my-10 max-w-xl px-4 sm:px-0"
        />
    </div>
</template>
