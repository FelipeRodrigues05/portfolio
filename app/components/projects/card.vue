<script setup lang="ts">
import type { Project } from "~/data/portfolio";

defineProps<{ project: Project; index: number }>();
</script>

<template>
  <article
    v-spotlight
    v-reveal
    :style="{ '--delay': `${index * 80}ms` }"
    class="spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ink-2 p-6 transition-colors hover:border-violet-500/40 md:p-8"
    :class="project.featured && 'bg-linear-to-br from-violet-950/60 via-ink-2 to-ink-2'"
  >
    <header class="flex items-start justify-between gap-4">
      <p class="font-mono text-[11px] tracking-widest text-neutral-400 uppercase">
        <span class="text-accent">{{ String(index + 1).padStart(2, "0") }}</span> / {{ project.kind }}
      </p>
      <Icon
        name="ph:arrow-up-right"
        aria-hidden="true"
        class="size-6 shrink-0 text-neutral-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
      />
    </header>

    <h3
      class="mt-6 font-display font-extrabold tracking-tight text-white"
      :class="project.featured ? 'text-5xl md:text-7xl' : 'text-3xl'"
    >
      {{ project.title }}
    </h3>
    <p class="mt-4 text-neutral-300" :class="project.featured && 'max-w-xl text-lg'">{{ project.summary }}</p>

    <!-- Mini case study — full on the featured tile, result-only on the rest -->
    <dl
      v-if="project.result || (project.featured && (project.problem || project.role))"
      class="mt-6 space-y-3 text-sm"
      :class="project.featured ? 'grid gap-4 space-y-0 md:grid-cols-3' : ''"
    >
      <template v-if="project.featured">
        <div v-if="project.problem">
          <dt class="font-mono text-[11px] tracking-widest text-neutral-500 uppercase">Problema</dt>
          <dd class="mt-1 text-neutral-300">{{ project.problem }}</dd>
        </div>
        <div v-if="project.role">
          <dt class="font-mono text-[11px] tracking-widest text-neutral-500 uppercase">Meu papel</dt>
          <dd class="mt-1 text-neutral-300">{{ project.role }}</dd>
        </div>
      </template>
      <div v-if="project.result">
        <dt class="font-mono text-[11px] tracking-widest text-neutral-500 uppercase">Resultado</dt>
        <dd class="mt-1 text-neutral-300">{{ project.result }}</dd>
      </div>
    </dl>

    <footer class="mt-auto pt-8">
      <ul class="flex flex-wrap gap-2" aria-label="Tecnologias">
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-neutral-300"
        >
          {{ tech }}
        </li>
      </ul>
      <div class="mt-5 flex gap-4 text-sm font-semibold">
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-white underline-offset-4 hover:text-accent hover:underline"
        >
          <Icon name="ph:github-logo" aria-hidden="true" /> Código
          <span class="sr-only">de {{ project.title }} (abre em nova aba)</span>
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-white underline-offset-4 hover:text-accent hover:underline"
        >
          <Icon name="ph:arrow-up-right" aria-hidden="true" /> Demo
          <span class="sr-only">de {{ project.title }} (abre em nova aba)</span>
        </a>
      </div>
    </footer>
  </article>
</template>
