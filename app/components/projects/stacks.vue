<script setup lang="ts">
import { stacks } from "~/data/portfolio";
</script>

<template>
  <section id="stack" aria-labelledby="stack-title" class="relative px-4 py-32 md:px-8">
    <div class="mx-auto max-w-7xl">
      <UiSectionLabel id="stack-title" index="04" label="Stack" />

      <div class="grid gap-x-12 gap-y-16 md:grid-cols-2">
        <div v-for="(group, g) in stacks" :key="group.label" v-reveal :style="{ '--delay': `${g * 100}ms` }">
          <h3 class="mb-6 font-display text-2xl font-bold text-white">{{ group.label }}</h3>
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="item in group.items"
              :key="item.name"
              class="group flex items-center gap-2.5 rounded-2xl border border-line bg-ink-2 py-2 pr-4 pl-2 transition duration-300 hover:-translate-y-1 hover:border-violet-500/50"
            >
              <Icon :name="item.icon" class="size-8 transition-transform duration-300 group-hover:rotate-[-8deg]" aria-hidden="true" />
              <span class="text-sm font-medium text-neutral-200">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
