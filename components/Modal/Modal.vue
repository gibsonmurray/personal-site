<script setup lang="ts">
    import { animations } from "./animations"

    onMounted(() => {
        animations.enter()
    })
</script>

<template>
    <div
        class="fixed left-0 top-0 z-50 flex h-svh w-screen items-center justify-center bg-white/20 backdrop-blur-md"
    >
        <div
            id="modal-grid"
            class="grid grid-cols-2 grid-rows-2 gap-5 place-items-center border border-transparent rounded-[42px] *:rounded-[42px]"
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
        </div>
    </div>
</template>
