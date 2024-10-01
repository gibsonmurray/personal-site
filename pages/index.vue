<script setup lang="ts">
    import type { Project } from "~/types"
    import { honeycombify } from "./utils"
    import animations from "~/components/Bubble/animations"
    import { store } from "~/global/store"
    import $ from "jquery"
    import { gsap, ScrollTrigger } from "gsap/all"

    gsap.registerPlugin(ScrollTrigger)

    const res = (await queryContent("/projects").findOne())
        ?.body as unknown as Project[]
    const projects: Project[] = res || []
    store.projects = projects

    const honeycombifiedProjects = honeycombify(projects)

    onMounted(() => {
        $("body").css("background-color", "#000")
        animations.enter()
    })
</script>

<template>
    <section
        class="flex min-h-svh w-screen flex-col items-center justify-start bg-black"
    >
        <div
            v-for="(row, i) in honeycombifiedProjects"
            :id="`row-${i}`"
            class="row flex items-center justify-center gap-4 opacity-0"
        >
            <Bubble
                v-for="(project, j) in row"
                :key="project?.title ?? `$bubble-${i}-${j}`"
                :location="{ row: i, column: j, rowLength: row.length }"
                :title="project?.title ?? ''"
                :path="project?.path ?? ''"
                :penLink="project?.penLink ?? ''"
                :thumbnail="project?.thumbnail ?? ''"
                :skills="project?.skills ?? []"
                :color="project?.color ?? ''"
                :subtitle="project?.subtitle ?? ''"
                :description="project?.description ?? ''"
                :keywords="project?.keywords ?? []"
                :hidden="project === null"
            />
        </div>
    </section>
</template>
