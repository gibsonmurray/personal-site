<script setup lang="ts">
    import type { Project } from "@/types"
    const route = useRoute()
    const project = route.query as unknown as Project
</script>

<template>
    <div
        class="about-page flex min-h-svh w-screen flex-col items-center justify-start"
        :style="`background-color: ${project?.color}`"
    >
        <ContentDoc path="/about" class="container prose my-10 max-w-xl" />
    </div>
</template>
