<script setup lang="ts">
    import { BadgeInfo, CodeXml } from "lucide-vue-next"
    import { animations } from "./animations"
    import { useRouter } from "vue-router"

    const props = defineProps<{
        infoBtn?: boolean
        sourceCodeBtn?: boolean
    }>()

    const emit = defineEmits(["openModal"])

    const homeClicked = ref(false)

    const router = useRouter()

    onMounted(() => {
        animations.enter()
    })

    const handleInfoClick = () => {
        emit("openModal")
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
        class="fixed bottom-10 z-10 flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100/60 px-2 py-1 shadow-sm backdrop-blur-md"
    >
        <button
            v-if="infoBtn"
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
            v-if="sourceCodeBtn"
            title="Source Code"
            class="flex aspect-square h-full items-center justify-center rounded-full transition-colors duration-300 hover:bg-zinc-400/30"
        >
            <CodeXml color="#000" />
        </button>
    </nav>
</template>
