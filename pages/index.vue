<script setup lang="ts">
    import type { Project } from "~/types"
    import { honeycombify } from "./scripts"

    const res = (await queryContent("/projects").findOne())
        ?.body as unknown as Project[]
    const projects: Project[] = res || []
    const honeycombifiedProjects = honeycombify(projects)
</script>

<template>
    <section class="flex items-center h-svh w-screen flex-col justify-start">
        <div
            v-for="row in honeycombifiedProjects"
            class="flex items-center justify-center gap-4"
        >
            <Bubble
                v-for="project in row"
                :key="project?.title ?? ''"
                :title="project?.title ?? ''"
                :path="project?.path ?? ''"
                :penLink="project?.penLink ?? ''"
                :thumbnail="project?.thumbnail ?? ''"
                :skills="project?.skills ?? ''"
                :color="project?.color ?? ''"
                :subtitle="project?.subtitle ?? ''"
                :description="project?.description ?? ''"
                :keywords="project?.keywords ?? ''"
                :hidden="project === null"
            />
        </div>
    </section>
</template>
