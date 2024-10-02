<script setup lang="ts">
    import animations from "./animations"

    const props = defineProps<{
        location: {
            row: number
            column: number
            rowLength: number
        }
        title: string
        path: string
        thumbnail: string
        color: string
        hidden?: boolean
        className?: string
    }>()

    const router = useRouter()
    const bubbleRef = ref(null)
    const clicked = ref(false)

    onMounted(() => {
        animations.scroll(
            bubbleRef.value,
            props.location.column,
            props.location.rowLength,
        )
    })

    const handleClick = async () => {
        clicked.value = true
        await animations.expand(bubbleRef.value, props.location)
        if (props.path === "/about") {
            router.push(`/about`)
        } else {
            router.push(`/project${props.path}`)
        }
    }
</script>

<template>
    <button
        ref="bubbleRef"
        :id="`bubble-${location.row}-${location.column}`"
        :title="title"
        :class="[
            'bubble relative flex aspect-square h-[20vh] max-h-52 cursor-pointer items-center justify-center',
            className,
            hidden ? 'invisible' : '',
        ]"
        @click="handleClick"
        :style="{
            borderRadius: '9999px',
            overflow: clicked ? 'visible' : 'hidden',
            zIndex: clicked ? 100 : 0,
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
