<script setup lang="ts">
import { site } from "~/data/portfolio";

const [first = "", ...rest] = site.name.toUpperCase().split(" ");
const last = rest.join(" ");
const tagline = useScramble(site.taglines);
</script>

<template>
  <section
    id="topo"
    aria-labelledby="hero-title"
    class="relative flex min-h-svh flex-col justify-end overflow-hidden px-4 pt-28 pb-10 md:px-8"
  >
    <!-- depth 0 — blueprint grid -->
    <div aria-hidden="true" data-depth="0" class="grid-lines absolute inset-0 -z-30 opacity-70" />

    <!-- depth 1 — glow / atmosphere -->
    <div aria-hidden="true" data-depth="1" class="hero-glow pointer-events-none absolute inset-0 -z-20">
      <div class="animate-float absolute top-[8%] -left-[10%] size-[55vw] max-w-[720px] rounded-full bg-violet-600/30 blur-[120px]" />
      <div
        class="animate-float absolute right-[-15%] bottom-[5%] size-[45vw] max-w-[600px] rounded-full bg-indigo-500/25 blur-[120px] [animation-delay:-5s]"
      />
    </div>

    <!-- depth 2 — floating meta labels -->
    <div aria-hidden="true" data-depth="2" class="pointer-events-none absolute inset-0 -z-10 hidden font-mono text-[11px] tracking-[0.25em] text-neutral-500 uppercase md:block">
      <span class="absolute top-[22%] left-8">[ portfolio — {{ new Date().getFullYear() }} ]</span>
      <span class="absolute top-[22%] right-8">{{ site.coords }}</span>
      <span class="absolute top-[48%] right-8 rotate-90 origin-right">scroll ↓</span>
    </div>

    <!-- depth 3/4 — bleed typography -->
    <div data-depth="3" class="hero-parallax mx-auto w-full max-w-[1600px]">
      <h1 id="hero-title" class="font-display leading-[0.82] font-extrabold tracking-[-0.04em] uppercase">
        <span class="sr-only">{{ site.name }} — {{ site.role }}</span>
        <span aria-hidden="true" class="block text-[clamp(3.5rem,17vw,17rem)] text-white">
          <span v-for="(ch, i) in first" :key="'f' + i" class="letter" :style="{ '--i': i }">{{ ch }}</span>
        </span>
        <span aria-hidden="true" class="text-outline block text-right text-[clamp(3rem,15vw,15rem)]">
          <span v-for="(ch, i) in last" :key="'l' + i" class="letter" :style="{ '--i': i + first.length }">{{ ch }}</span>
        </span>
      </h1>

      <div class="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <div class="space-y-5">
          <p class="flex items-center gap-2.5 font-mono text-xs tracking-widest text-neutral-300 uppercase">
            <span class="relative flex size-2.5">
              <span v-if="site.available" class="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-75" />
              <span class="relative inline-flex size-2.5 rounded-full" :class="site.available ? 'bg-acid' : 'bg-neutral-500'" />
            </span>
            {{ site.availability }}
          </p>
          <p class="font-mono text-xl text-neutral-200 md:text-3xl">
            <span class="text-violet-400" aria-hidden="true">&gt;</span>
            <span class="sr-only">{{ site.taglines.join(", ") }}</span>
            <span aria-hidden="true"> {{ tagline }}</span>
            <span aria-hidden="true" class="animate-blink ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-acid" />
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-magnetic
            href="#projetos"
            class="group inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3.5 font-semibold text-ink"
          >
            Ver projetos
            <Icon name="ph:arrow-down" class="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            v-if="site.resume"
            v-magnetic
            :href="site.resume"
            download
            class="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Baixar CV
            <Icon name="ph:download-simple" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
