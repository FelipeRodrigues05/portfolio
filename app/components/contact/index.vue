<script setup lang="ts">
import { site, socials } from "~/data/portfolio";

const year = new Date().getFullYear();
</script>

<template>
  <footer id="contato" aria-labelledby="contato-title" class="relative overflow-hidden px-4 pt-32 pb-10 md:px-8 md:pt-48">
    <!-- depth 1 — glow -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-linear-to-t from-violet-700/30 via-indigo-900/10 to-transparent" />
    <div aria-hidden="true" class="grid-lines absolute inset-0 -z-20 opacity-50" />

    <div class="mx-auto max-w-7xl">
      <UiSectionLabel id="contato-title" index="05" label="Contato" />

      <div class="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
        <p v-reveal class="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.85] font-extrabold tracking-[-0.04em] text-white uppercase">
          Vamos<br>
          <span class="text-outline">construir</span><br>
          algo<span class="text-acid">?</span>
        </p>

        <a
          v-magnetic="0.4"
          :href="`mailto:${site.email}`"
          class="group grid size-44 place-items-center justify-self-start rounded-full bg-acid text-center font-display text-lg font-bold text-ink transition-transform hover:scale-105 md:size-56 lg:justify-self-end"
        >
          <span class="flex flex-col items-center gap-1">
            <Icon name="ph:envelope-simple" class="size-7" aria-hidden="true" />
            Mande um<br>e-mail
          </span>
        </a>
      </div>

      <div class="mt-24 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <ul class="flex flex-wrap gap-3">
          <li v-for="s in socials" :key="s.label">
            <a
              :href="s.href"
              :target="s.href.startsWith('mailto:') ? undefined : '_blank'"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-acid hover:text-acid"
            >
              <Icon :name="s.icon" class="size-4" aria-hidden="true" />
              {{ s.label }}
            </a>
          </li>
        </ul>
        <div class="flex items-center gap-6 font-mono text-xs text-neutral-500">
          <span>© {{ year }} {{ site.name }} · {{ site.location }}</span>
          <a href="#topo" class="inline-flex items-center gap-1 hover:text-acid">
            Topo <Icon name="ph:arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
