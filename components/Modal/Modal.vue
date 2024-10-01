<script setup lang="ts">
    import type { Project } from "~/types"
    import { animations } from "./animations"

    const { project } = defineProps<{
        project: Project
    }>()

    const emit = defineEmits(["close"])

    onMounted(() => {
        animations.open()
        console.log(project)
    })

    const handleClose = async () => {
        await animations.close()
        emit("close")
    }
</script>

<template>
    <div
        id="modal-bg"
        class="fixed left-0 top-0 z-50 flex h-svh w-screen items-center justify-center bg-white/20 backdrop-blur-md"
    >
        <div
            id="close-bg"
            @click="handleClose"
            class="absolute left-0 top-0 h-full w-full"
        ></div>
        <div
            id="modal-grid"
            class="relative grid grid-cols-2 grid-rows-2 place-items-center gap-5 rounded-[42px] border border-transparent *:rounded-[42px]"
        >
            <div
                id="tl"
                class="modal-square aspect-[4/3] h-[250px] bg-white"
            ></div>
            <div
                id="tr"
                class="modal-square aspect-[4/3] h-[250px] bg-white"
            ></div>
            <div
                id="bl"
                class="modal-square aspect-[4/3] h-[250px] bg-white"
            ></div>
            <div
                id="br"
                class="modal-square aspect-[4/3] h-[250px] bg-white"
            ></div>

            <!-- todo: remove bg color -->
            <div
                id="modal-content"
                class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-start overflow-y-auto bg-white p-3 text-black"
            >
                <!-- <h1>{{ project.title }}</h1> -->
            </div>
        </div>
    </div>
</template>
