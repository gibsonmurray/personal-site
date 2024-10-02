<script setup lang="ts">
    import $ from "jquery"
    import gsap from "gsap"
    import { useRoute } from "vue-router"
    import { ref } from "vue"
    import type { Project } from "~/types"

    const route = useRoute()
    const height = ref(1000)
    const entry = route.path.split("/").pop()
    const modal = ref(false)

    const res = (await queryContent("/projects").findOne())
        ?.body as unknown as Project[]
    const project = res.find((p) => p.path === "/" + entry) || null

    useSeoMeta({
        title: project?.title,
        // description: project?.description,
        ogTitle: project?.title,
        // ogDescription: project?.description,
        ogImage: "/og-image.jpeg",
        ogUrl: `https://gibsonmurray.com/project/${project?.path}`,
        twitterTitle: project?.title,
        // twitterDescription: project?.description,
        twitterImage: "/og-image.jpeg",
    })

    const handleOpenModal = () => {
        modal.value = true
    }

    const handleClose = () => {
        modal.value = false
    }

    onMounted(() => {
        height.value = window.innerHeight
        $("body").css("background-color", project?.color || "#000")

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
    <div
        class="relative flex h-svh w-screen flex-col items-center justify-start overflow-hidden pb-12"
    >
        <Nav
            @openModal="handleOpenModal"
            infoBtn
            :source-code-btn="project?.penLink"
        />
        <div class="w-full" :style="`background-color: ${project?.color}`">
            <p
                :data-height="height"
                data-theme-id="44795"
                :data-zoom="height < 768 ? 0.5 : 1"
                data-default-tab="result"
                :data-slug-hash="project?.penLink?.split('/').pop()"
                :data-pen-title="project?.title"
                data-user="gibsonmurray"
                class="codepen center box-border w-full opacity-0"
            ></p>
        </div>
        <Modal
            v-if="modal && project"
            @close="handleClose"
            :project="project"
        />
    </div>
</template>
