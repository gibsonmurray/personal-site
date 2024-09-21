<script setup lang="ts">
    import type { Project } from "~/types"
    import { honeycombify } from "./scripts"
    import animations from "~/components/Bubble/animations"
    const res = (await queryContent("/projects").findOne())
        ?.body as unknown as Project[]
    const projects: Project[] = res || []
    const honeycombifiedProjects = honeycombify(projects)

    onMounted(() => {
        animations.enter()
    })
</script>

<template>
    <section
        class="flex h-[200vh] w-screen flex-col items-center justify-start"
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
