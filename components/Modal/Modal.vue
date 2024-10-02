<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue"
    import { gsap } from "gsap"
    import type { Project } from "~/types"
    import { animations } from "./animations"
    import { XIcon, ChevronDownIcon } from "lucide-vue-next"
    import { formatChips } from "./text-formater"
    import { getSeason } from "./utils"

    const { project } = defineProps<{
        project: Project
    }>()

    const emit = defineEmits(["close"])

    const tickerRef = ref<HTMLDivElement | null>(null)
    let tickerAnimation: gsap.core.Tween | null = null

    const setupTicker = () => {
        if (!tickerRef.value) return

        const ticker = tickerRef.value
        const tickerContent = ticker.querySelector(
            ".ticker-content",
        ) as HTMLElement
        const tickerWidth = tickerContent.offsetWidth

        // Clone the content
        ticker.appendChild(tickerContent.cloneNode(true))

        // Set up GSAP animation
        tickerAnimation = gsap.to(ticker, {
            x: -(tickerWidth + 8), // Add 8px to account for the gap
            duration: 30,
            ease: "linear",
            repeat: -1,
            onRepeat: () => {
                gsap.set(ticker, { x: 0 })
            },
        })
    }

    const handleClose = async () => {
        await animations.close()
        emit("close")
    }

    const content = useTemplateRef<HTMLElement>("content")
    let arrowFlipped = false

    const checkScroll = () => {
        if (!content.value) return
        const elmt = content.value
        const isScrollable = elmt.scrollHeight > elmt.clientHeight
        const isScrolledToBottom =
            elmt.scrollHeight - elmt.scrollTop <= elmt.clientHeight + 1
        if (isScrollable && isScrolledToBottom) {
            animations.flipArrowUp()
            arrowFlipped = true
        } else if (arrowFlipped) {
            animations.flipArrowDown()
            arrowFlipped = false
        }
    }

    onMounted(() => {
        animations.open()
        setupTicker()
        formatChips()
        animations.scrollArrowYoyo()
    })

    onUnmounted(() => {
        if (tickerAnimation) {
            tickerAnimation.kill()
        }
    })

    watch(
        () => content.value?.scrollTop,
        () => {
            checkScroll()
        },
    )

    const handleScroll = () => {
        if (!content.value) return
        const scrollTo = arrowFlipped ? 0 : content.value.scrollHeight
        content.value.scrollTo({
            top: scrollTo,
            behavior: "smooth",
        })
    }

    const img = project.path?.includes("parallax-seasons")
        ? `/thumbnails/parallax-seasons/${getSeason()}.jpeg`
        : project.thumbnail

    const windowWidth = ref(window.innerWidth)
    window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth
    })
</script>

<template>
    <div
        id="modal-bg"
        class="fixed left-0 top-0 z-50 flex h-svh w-screen items-center justify-center bg-black/20 backdrop-blur-md"
    >
        <div
            id="close-bg"
            @click="handleClose"
            class="absolute left-0 top-0 h-full w-full"
        ></div>
        <div
            id="modal-grid"
            class="relative grid grid-cols-2 grid-rows-2 place-items-center gap-5 rounded-[42px] p-2 *:rounded-[42px] md:border md:border-transparent md:p-0"
        >
            <div
                id="tl"
                class="modal-square h-[40vh] w-full max-w-[48vw] bg-white/80 backdrop-blur-lg md:aspect-[4/3] md:h-[250px] md:w-auto md:max-w-none"
            ></div>
            <div
                id="tr"
                class="modal-square h-[40vh] w-[48vw] bg-white/80 backdrop-blur-lg md:aspect-[4/3] md:h-[250px] md:w-auto md:max-w-none"
            ></div>
            <div
                id="bl"
                class="modal-square h-[40vh] w-full max-w-[48vw] bg-white/80 backdrop-blur-lg md:aspect-[4/3] md:h-[250px] md:w-auto md:max-w-none"
            ></div>
            <div
                id="br"
                class="modal-square h-[40vh] w-[48vw] bg-white/80 backdrop-blur-lg md:aspect-[4/3] md:h-[250px] md:w-auto md:max-w-none"
            ></div>

            <div
                id="modal-content"
                class="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-between gap-5 overflow-y-auto overflow-x-hidden px-10 py-8 text-black"
            >
                <div
                    id="modal-header"
                    class="relative flex h-24 w-full items-center justify-start gap-4"
                >
                    <NuxtImg
                        v-if="windowWidth > 500"
                        :src="img"
                        class="aspect-square h-20 rounded-full border border-zinc-400 object-cover"
                    />
                    <div
                        class="flex h-full flex-col items-start justify-evenly md:gap-0"
                    >
                        <h1 class="text-lg font-bold md:text-2xl">
                            {{ project.title }}
                        </h1>
                        <div
                            class="flex w-[calc(100vw-5rem)] items-center justify-start gap-2 overflow-x-auto text-xs md:text-sm"
                        >
                            <span
                                v-for="skill in project.skills"
                                :key="skill"
                                :id="`s-${skill.toLowerCase()}`"
                                :class="`skill-chip overflow-hidden rounded-full bg-zinc-300 px-2 py-[2px] md:px-3 md:py-1`"
                                >{{ skill }}</span
                            >
                        </div>
                    </div>
                    <XIcon
                        class="absolute -right-4 -top-2 h-6 w-6 cursor-pointer text-zinc-600 md:right-0 md:top-0"
                        @click="handleClose"
                    />
                </div>
                <hr class="w-full border border-b-0 border-zinc-400" />
                <div
                    ref="content"
                    id="modal-body"
                    class="flex h-full flex-col items-center justify-start overflow-y-auto"
                    @scroll="checkScroll"
                >
                    <ContentDoc
                        :id="project.title"
                        :path="`/projects${project.path}`"
                        class="prose w-full"
                    />
                </div>

                <div class="flex h-2 w-full items-center justify-center">
                    <ChevronDownIcon
                        @click="handleScroll"
                        id="chevron-down"
                        class="h-6 w-6 cursor-pointer text-zinc-400"
                    />
                </div>

                <div id="modal-footer" class="flex w-full flex-col gap-2">
                    <div
                        class="ticker-wrap relative h-8 overflow-hidden text-xs md:text-sm"
                    >
                        <div
                            ref="tickerRef"
                            class="ticker absolute flex whitespace-nowrap"
                        >
                            <div class="ticker-content flex gap-2">
                                <span
                                    v-for="tag in project.keywords"
                                    :key="tag"
                                    :class="`t-${tag.toLowerCase()} whitespace-nowrap rounded-full bg-blue-500 px-2 md:px-3 py-1 text-white`"
                                    >{{ tag }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .ticker-wrap {
        width: 100%;
        overflow: hidden;
        border-radius: 999px;
    }

    .ticker {
        top: 50%;
        transform: translateY(-50%);
        will-change: transform; /* Optimize animation performance */
    }

    .ticker-content {
        margin-right: 8px;
    }
</style>
