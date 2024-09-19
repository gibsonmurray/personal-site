<script setup lang="ts">
    import animations from "./animations"
    import { getBubbleScale } from "./utils"

    const props = defineProps<{
        id: string
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

    onMounted(() => {
        const scale = getBubbleScale(bubbleRef.value)
        animations.setScale(bubbleRef.value, scale)
    })

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
        animations.expand(bubbleRef.value)
    }
</script>

<template>
    <button
        ref="bubbleRef"
        :id="id"
        :title="title"
        :class="[
            'bubble relative flex aspect-square h-[20vh] max-h-52 cursor-pointer items-center justify-center opacity-0',
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
            class="bubble-background absolute flex h-full w-full items-center justify-center rounded-full opacity-0"
            :style="{ backgroundColor: color }"
        ></div>

        <div
            v-if="!hidden"
            class="bubble-image relative h-full w-full rounded-full"
        >
            <NuxtImg
                class="h-full w-full rounded-full object-cover"
                :src="thumbnail"
                alt="thumbnail"
            />
        </div>
    </button>
</template>
