<script setup lang="ts">
import { experiences } from "~/data/portfolio";
</script>

<template>
  <section id="experiencia" aria-labelledby="experiencia-title" class="relative px-4 py-32 md:px-8 md:py-48">
    <div aria-hidden="true" class="grid-lines absolute inset-0 -z-10 opacity-40" />

    <div class="mx-auto max-w-7xl">
      <UiSectionLabel id="experiencia-title" index="02" label="Experiência" />

      <ol class="relative">
        <!-- Timeline rail + scroll-driven fill -->
        <span aria-hidden="true" class="absolute top-0 bottom-0 left-[11px] w-px bg-line md:left-[15px]" />
        <span aria-hidden="true" class="timeline-fill absolute top-0 bottom-0 left-[11px] w-px bg-linear-to-b from-acid via-violet-500 to-indigo-500 md:left-[15px]" />

        <li v-for="(job, i) in experiences" :key="job.company" class="group relative pb-20 pl-12 last:pb-0 md:pl-20">
          <span
            aria-hidden="true"
            class="absolute top-2 left-0 grid size-6 place-items-center rounded-full border border-white/20 bg-ink transition-colors group-hover:border-acid md:size-8"
          >
            <span class="size-2 rounded-full bg-violet-400 transition-colors group-hover:bg-acid" />
          </span>

          <article v-reveal class="grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
            <header>
              <p class="font-mono text-xs tracking-widest text-neutral-400 uppercase">
                <time>{{ job.period }}</time> · {{ job.location }}
              </p>
              <h3 class="mt-3 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                <span aria-hidden="true" class="text-outline mr-2 text-2xl md:text-3xl">{{ String(i + 1).padStart(2, "0") }}</span>
                {{ job.company }}
              </h3>
              <p class="mt-2 text-lg text-violet-300">{{ job.role }}</p>

              <ul v-if="job.progression" class="mt-4 space-y-1 border-l border-line pl-4 text-sm text-neutral-400">
                <li v-for="step in job.progression" :key="step.role">
                  {{ step.role }} <span class="text-neutral-500">· {{ step.period }}</span>
                </li>
              </ul>

              <a
                v-if="job.url"
                :href="job.url"
                target="_blank"
                rel="noopener"
                class="mt-5 inline-flex items-center gap-1.5 text-sm text-neutral-300 underline-offset-4 hover:text-acid hover:underline"
              >
                Visitar site <span class="sr-only">da {{ job.company }} (abre em nova aba)</span>
                <Icon name="ph:arrow-up-right" aria-hidden="true" />
              </a>
            </header>

            <div>
              <p class="text-lg leading-relaxed text-neutral-300">{{ job.summary }}</p>
              <ul class="mt-6 space-y-3">
                <li v-for="item in job.highlights" :key="item" class="flex gap-3 text-neutral-300">
                  <span aria-hidden="true" class="mt-2.5 h-px w-4 shrink-0 bg-acid" />
                  {{ item }}
                </li>
              </ul>
              <ul class="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
                <li
                  v-for="tech in job.stack"
                  :key="tech"
                  class="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-neutral-300"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
