<script setup lang="ts">
import { projects, socials } from "~/data/portfolio";

const github = socials.find((s) => s.label === "GitHub");
</script>

<template>
  <section id="projetos" aria-labelledby="projetos-title" class="relative px-4 py-32 md:px-8 md:py-48">
    <div class="mx-auto max-w-7xl">
      <UiSectionLabel id="projetos-title" index="03" label="Projetos" />

      <p v-reveal class="mb-16 max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-white md:text-6xl">
        Coisas que construí <span class="text-outline">fora do expediente</span>.
      </p>

      <!-- Bento grid: featured project takes the big tile -->
      <ul class="grid auto-rows-[minmax(260px,auto)] gap-4 md:grid-cols-6">
        <li
          v-for="(project, i) in projects"
          :key="project.title"
          :class="[
            project.featured ? 'md:col-span-4 md:row-span-2' : i < 3 ? 'md:col-span-2' : 'md:col-span-3',
          ]"
        >
          <ProjectsCard :project="project" :index="i" />
        </li>
      </ul>

      <a
        v-if="github"
        :href="github.href"
        target="_blank"
        rel="noopener"
        class="group mt-10 inline-flex items-center gap-2 font-mono text-sm tracking-wider text-neutral-300 uppercase hover:text-acid"
      >
        Mais no GitHub <span class="sr-only">(abre em nova aba)</span>
        <Icon name="ph:arrow-up-right" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>
