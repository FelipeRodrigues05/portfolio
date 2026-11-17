<script setup lang="ts">
import { about, site } from "~/data/portfolio";

const words = about.text.split(" ");
const badge = `${site.availability} • ${site.location} • `;
</script>

<template>
  <section id="sobre" aria-labelledby="sobre-title" class="relative overflow-x-clip px-4 py-32 md:px-8 md:py-48">
    <div class="mx-auto max-w-7xl">
      <UiSectionLabel id="sobre-title" index="01" label="Sobre" />

      <div class="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <!-- depth 3 — portrait with rotating badge -->
        <div class="relative mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:self-start">
          <div aria-hidden="true" class="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-violet-600/40 to-indigo-500/10 blur-2xl" />
          <div v-reveal="'clip'" class="overflow-hidden rounded-[2rem] border border-line">
            <img
              :src="site.avatar"
              :alt="`Foto de ${site.name}`"
              width="460"
              height="460"
              loading="lazy"
              decoding="async"
              class="aspect-square w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            >
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            class="absolute -right-6 -bottom-8 size-32 animate-[spin_18s_linear_infinite] md:size-36"
          >
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="98" class="fill-ink stroke-white/10" />
            <text class="fill-neutral-200 font-mono text-[13px] tracking-[0.18em] uppercase">
              <textPath href="#badge-circle" textLength="485">{{ badge }}</textPath>
            </text>
            <circle cx="100" cy="100" r="7" class="fill-acid" />
          </svg>
        </div>

        <div>
          <h3 v-reveal class="mb-10 font-display text-4xl leading-[1.05] font-bold tracking-tight text-white md:text-6xl">
            {{ about.heading }}
          </h3>

          <!-- Word-by-word scroll lighting (CSS scroll-driven animation) -->
          <p class="text-xl leading-relaxed text-white md:text-2xl">
            <template v-for="(word, i) in words" :key="i">
              <span class="word-light">{{ word }}</span>{{ " " }}
            </template>
          </p>

          <dl class="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            <div
              v-for="(fact, i) in about.facts"
              :key="fact.label"
              v-reveal
              :style="{ '--delay': `${i * 90}ms` }"
              class="bg-ink p-6"
            >
              <dt class="font-mono text-[11px] tracking-widest text-neutral-400 uppercase">{{ fact.label }}</dt>
              <dd class="mt-2 font-display text-3xl font-extrabold tracking-tight text-acid">{{ fact.value }}</dd>
            </div>
          </dl>

          <div class="mt-16 grid gap-10 md:grid-cols-2">
            <div v-reveal>
              <h4 class="mb-4 font-mono text-xs tracking-widest text-neutral-400 uppercase">Formação</h4>
              <ul class="space-y-4">
                <li v-for="ed in about.education" :key="ed.course">
                  <p class="font-semibold text-white">{{ ed.course }}</p>
                  <p class="text-sm text-neutral-400">{{ ed.school }} · {{ ed.period }}</p>
                </li>
              </ul>
            </div>
            <div v-reveal style="--delay: 120ms">
              <h4 class="mb-4 font-mono text-xs tracking-widest text-neutral-400 uppercase">Idiomas</h4>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="lang in about.languages"
                  :key="lang"
                  class="rounded-full border border-line px-3 py-1.5 text-sm text-neutral-300"
                >
                  {{ lang }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
