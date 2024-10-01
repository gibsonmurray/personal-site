<script setup lang="ts">
    import $ from "jquery"
    import gsap from "gsap"
    import { store } from "~/global/store"
    import { useRoute } from "vue-router"
    import { ref, onMounted, watch } from "vue"
    import type { Project } from "~/types"

    const route = useRoute()

    const height = ref(1000)
    const entry = route.path.split("/").pop()
    const project = ref<Project>({})
    const hash = ref("")
    const color = ref("")
    const title = ref("")

    const modal = ref(false)

    const handleInfo = () => {
        modal.value = true
    }

    const handleClose = () => {
        modal.value = false
    }

    onMounted(() => {
        const updateProject = () => {
            const foundProject = store.projects.find(
                (p) => p.path === "/" + entry,
            )
            if (foundProject) {
                project.value = foundProject
                hash.value = foundProject.penLink?.split("/").pop() ?? ""
                color.value = foundProject.color ?? ""
                title.value = foundProject.title ?? ""

                console.log("Found project:", foundProject)

                $("body").css("background-color", color.value)

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
            } else {
                console.error("Project not found for path:", "/" + entry)
            }
        }

        // Initial check
        updateProject()

        // Watch for changes in store.projects
        watch(() => store.projects, updateProject, { deep: true })

        height.value = window.innerHeight
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
        <Nav @info="handleInfo" info />
        <div class="w-full" :style="`background-color: ${color}`">
            <p
                :data-height="height"
                data-theme-id="44795"
                :data-zoom="height < 768 ? 0.5 : 1"
                data-default-tab="result"
                :data-slug-hash="hash"
                :data-pen-title="title"
                data-user="gibsonmurray"
                class="codepen center box-border w-full opacity-0"
            ></p>
        </div>
        <Modal
            v-if="modal"
            @close="handleClose"
            :project="project"
        />
    </div>
</template>
