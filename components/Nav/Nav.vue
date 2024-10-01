<script setup lang="ts">
    import { BadgeInfo, CodeXml } from "lucide-vue-next"
    import { animations } from "./animations"
    import { useRouter } from "vue-router"
    import { store } from "~/global/store"

    const props = defineProps<{
        info?: boolean
        sourceCode?: boolean
    }>()

    const homeClicked = ref(false)

    const router = useRouter()

    onMounted(() => {
        animations.enter()
    })

    const handleInfoClick = () => {
        console.log("info clicked")
        store.modal = true
    }

    const handleHomeClick = () => {
        homeClicked.value = true
        animations.homeOut()
        setTimeout(() => {
            router.push("/")
        }, 1000)
    }
</script>

<template>
    <div
        id="overlay-top"
        class="fixed bottom-full left-0 z-50 h-1/2 w-screen bg-black"
        :style="{ opacity: homeClicked ? 1 : 0 }"
    ></div>
    <div
        id="overlay-bottom"
        class="fixed left-0 top-full z-50 h-1/2 w-screen bg-black"
        :style="{ opacity: homeClicked ? 1 : 0 }"
    ></div>
    <nav
        id="nav"
        class="fixed bottom-10 z-10 flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100/50 px-2 py-1 shadow-sm backdrop-blur-md"
    >
        <button
            v-if="info"
            @click="handleInfoClick"
            title="More Info"
            class="flex aspect-square h-full items-center justify-center rounded-full transition-colors duration-300"
        >
            <BadgeInfo color="#000" />
        </button>
        <button
            id="home-btn"
            title="Home"
            @mouseenter="animations.homeHover(homeClicked)"
            @mouseleave="animations.homeRestore(homeClicked)"
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
