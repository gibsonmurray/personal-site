<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue"
    import { gsap } from "gsap"
    import type { Project } from "~/types"
    import { animations } from "./animations"
    import { XIcon, ChevronDownIcon } from "lucide-vue-next"
    import { formatChips } from "./text-formater"

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
            class="relative grid grid-cols-2 grid-rows-2 place-items-center gap-5 rounded-[42px] border border-transparent *:rounded-[42px]"
        >
            <div
                id="tl"
                class="modal-square aspect-[4/3] h-[250px] bg-white/80 backdrop-blur-lg"
            ></div>
            <div
                id="tr"
                class="modal-square aspect-[4/3] h-[250px] bg-white/80 backdrop-blur-lg"
            ></div>
            <div
                id="bl"
                class="modal-square aspect-[4/3] h-[250px] bg-white/80 backdrop-blur-lg"
            ></div>
            <div
                id="br"
                class="modal-square aspect-[4/3] h-[250px] bg-white/80 backdrop-blur-lg"
            ></div>

            <div
                id="modal-content"
                class="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-between gap-5 overflow-y-auto px-10 py-8 text-black"
            >
                <div
                    id="modal-header"
                    class="relative flex w-full items-center justify-start gap-4"
                >
                    <NuxtImg
                        :src="project.thumbnail"
                        class="aspect-square h-20 overflow-hidden rounded-full border border-zinc-400 object-cover"
                    />
                    <div
                        class="flex h-full flex-col items-start justify-evenly"
                    >
                        <h1 class="w-full text-2xl font-bold">
                            {{ project.title }}
                        </h1>
                        <div
                            class="flex items-center justify-start gap-2 text-sm"
                        >
                            <span
                                v-for="skill in project.skills"
                                :key="skill"
                                :id="`s-${skill.toLowerCase()}`"
                                :class="`skill-chip overflow-hidden rounded-full bg-zinc-300 px-3 py-1`"
                                >{{ skill }}</span
                            >
                        </div>
                    </div>
                    <XIcon
                        class="absolute right-0 top-0 h-6 w-6 cursor-pointer text-zinc-600"
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
                    <!-- <h3 class="font-bold text-zinc-800">Tags:</h3> -->
                    <div
                        class="ticker-wrap relative h-8 overflow-hidden text-sm"
                    >
                        <div
                            ref="tickerRef"
                            class="ticker absolute flex whitespace-nowrap"
                        >
                            <div class="ticker-content flex gap-2">
                                <span
                                    v-for="tag in project.keywords"
                                    :key="tag"
                                    :class="`t-${tag.toLowerCase()} whitespace-nowrap rounded-full bg-blue-500 px-3 py-1 text-white`"
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
