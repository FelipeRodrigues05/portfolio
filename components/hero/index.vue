<script lang="ts"></script>

<template>
    <section class="h-screen flex flex-col items-center justify-center">
        <div class="text-center space-y-4">
            <!-- change to image -->
            <div
                class="bg-gradient-to-r from-purple-600 to-indigo-400 inline-block text-transparent bg-clip-text"
            >
                <p class="text-4xl mb-2 font-bold">Felipe Rodrigues</p>
            </div>
            <!-- add typewriter effect -->
            <p
                class="text-3xl mb-2 font-bold relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-neutral-900"
            >
                Software Developer
            </p>

            <HeroSocial-Media />
        </div>
        <a
            href="#about"
            class="hover:text-purple-600 transition-all mt-14 animate-bounce"
        >
            <Icon name="mingcute:down-fill" size="64"
        /></a>
    </section>
</template>
