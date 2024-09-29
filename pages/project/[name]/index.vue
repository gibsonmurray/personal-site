<script setup lang="ts">
    import $ from "jquery"
    import gsap from "gsap"
    import { store } from "~/global/store"
    import { useRoute } from "vue-router"

    const route = useRoute()

    const height = ref(1000)
    const entry = route.path.split("/").pop()
    const project = store.projects.find((p) => p.path === "/" + entry)

    const {
        title,
        penLink,
        thumbnail,
        skills,
        color,
        subtitle,
        description,
        keywords,
    } = project || {}

    const hash = penLink?.split("/").pop()

    onMounted(() => {
        height.value = window.innerHeight
        $("body").css("background-color", color!)

        const script = $("<script>", {
            src: "https://cpwebassets.codepen.io/assets/embed/ei.js",
            async: true,
            id: "codepen-script",
        })
        $("body").append(script)

        setTimeout(() => {
            gsap.fromTo(
                ".cp_embed_wrapper",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    delay: 1,
                    ease: "power1.out",
                },
            )
        }, 0) // Delay to ensure the script is loaded
    })

    onUnmounted(() => {
        $("#codepen-script, .cp_embed_wrapper").remove()
        $("body").css("background-color", "#000")
    })
</script>

<template>
    <div :style="`background-color: ${color}`">
        <p
            :data-height="height"
            data-theme-id="44795"
            :data-zoom="height < 768 ? 0.5 : 1"
            data-default-tab="result"
            :data-slug-hash="hash"
            :data-pen-title="title"
            data-user="gibsonmurray"
            class="codepen center opacity-0 box-border w-full"
        ></p>
    </div>
</template>
