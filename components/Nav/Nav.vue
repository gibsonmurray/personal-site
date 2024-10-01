<script setup lang="ts">
    import { BadgeInfo, CodeXml } from "lucide-vue-next"
    import { animations } from "./animations"
    import { useRouter } from "vue-router"
    import { store } from "@/global/store"

    defineProps<{
        info?: boolean
        sourceCode?: boolean
    }>()

    const router = useRouter()

    onMounted(() => {
        animations.enter()
    })

    const handleHomeClick = () => {
        store.homeClicked = true
        animations.homeOut()
        setTimeout(() => {
            router.push("/")
        }, 700)
    }
</script>

<template>
    <div
        id="overlay"
        v-if="store.homeClicked"
        class="fixed left-0 top-0 z-50 h-screen w-screen bg-black"
    ></div>
    <nav
        id="nav"
        class="fixed bottom-10 z-10 flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100/50 px-2 py-1 backdrop-blur-md shadow-sm"
    >
        <button
            v-if="info"
            title="More Info"
            class="flex aspect-square h-full items-center justify-center rounded-full transition-colors duration-300"
        >
            <BadgeInfo color="#000" />
        </button>
        <button
            id="home-btn"
            title="Home"
            @mouseenter="animations.homeHover(store.homeClicked)"
            @mouseleave="animations.homeRestore(store.homeClicked)"
            @mousedown="animations.homeDown()"
            @click="handleHomeClick"
            class="grid aspect-square h-full rotate-45 grid-cols-2 grid-rows-2 place-items-center rounded-full p-[9px]"
        >
            <!-- <LayoutGrid color="#000" /> -->
            <div
                class="home-square aspect-square w-2 rounded-sm border-2 border-black"
            ></div>
            <div
                class="home-square aspect-square w-2 rounded-sm border-2 border-black"
            ></div>
            <div
                class="home-square aspect-square w-2 rounded-sm border-2 border-black"
            ></div>
            <div
                class="home-square aspect-square w-2 rounded-sm border-2 border-black"
            ></div>
        </button>
        <button
            v-if="sourceCode"
            title="Source Code"
            class="flex aspect-square h-full items-center justify-center rounded-full transition-colors duration-300 hover:bg-zinc-400/30"
        >
            <CodeXml color="#000" />
        </button>
    </nav>
</template>
