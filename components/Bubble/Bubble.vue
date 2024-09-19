<script setup lang="ts">
    import animations from "./animations"

    const props = defineProps<{
        title?: string
        path?: string
        penLink?: string
        thumbnail: string
        skills?: string[]
        color?: string
        subtitle?: string
        description?: string
        keywords?: string[]
        hidden?: boolean
        className?: string
    }>()

    const router = useRouter()
    const bubbleRef = ref(null)
    const clicked = ref(false)
    const scale = ref(1)

    const getCenterPoint = () => {
        const vh = window.innerHeight
        const vw = window.innerWidth
        return { x: Math.round(vw / 2), y: Math.round(vh / 2) }
    }

    const distanceFromCenter = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect()
        const center = getCenterPoint()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2
        return Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2))
    }

    // const setBubbleScale = () => {
    //     if (bubbleRef.value) {
    //         const dist = distanceFromCenter(bubbleRef.value)
    //         let newScale = Math.max(1 - Math.pow(dist / 470, 3), 0)
    //         scale.value = newScale
    //     }
    // }

    // onMounted(() => {
    //     window.addEventListener("scroll", setBubbleScale)
    //     setBubbleScale()
    //     animations.enter("#bubble")
    // })

    // onUnmounted(() => {
    //     window.removeEventListener("scroll", setBubbleScale)
    // })

    // watch(() => bubbleRef.value, setBubbleScale)

    const handleClick = () => {
        clicked.value = true
        animations.expand("#bubble-background")
    }
</script>

<template>
    <button
        ref="bubbleRef"
        id="bubble"
        :title="title"
        :class="[
            'bubble relative flex aspect-square h-52 cursor-pointer items-center justify-center',
            className,
            hidden ? 'invisible' : '',
        ]"
        @click="handleClick"
        :style="{
            borderRadius: '9999px',
            overflow: clicked ? 'visible' : 'hidden',
            zIndex: clicked ? 100 : 0,
            scale: scale,
        }"
    >
        <div
            id="bubble-background"
            class="absolute flex h-full w-full items-center justify-center rounded-full opacity-0"
            :style="{ backgroundColor: color }"
        ></div>

        <div
            v-if="!hidden"
            id="bubble-image"
            class="relative h-full w-full rounded-full"
        >
            <NuxtImg
                class="h-full w-full rounded-full object-cover"
                :src="thumbnail"
                alt="thumbnail"
            />
        </div>
    </button>
</template>
