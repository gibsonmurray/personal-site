<script setup lang="ts">
    import $ from "jquery"
    import gsap from "gsap"

    onMounted(() => {
        $("body").css("background-color", "#fff")
        gsap.fromTo(
            "#about > *",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                duration: 1,
                delay: 1,
                y: 0,
                ease: "power1.out",
                stagger: 0.1,
            },
        )
    })
</script>

<template>
    <div
        class="about-page relative flex min-h-svh w-screen flex-col items-center justify-start bg-white pb-12"
    >
        <Nav />
        <ContentDoc
            id="about"
            path="/about"
            class="container prose my-10 max-w-xl px-4 sm:px-0"
        />
        <div class="blur-gradient"></div>
    </div>
</template>

<style scoped>
    .blur-gradient {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
        );
        pointer-events: none;
    }

    .blur-gradient::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(5px);
        mask-image: linear-gradient(to top, black, transparent);
    }
</style>
