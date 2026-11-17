<script setup lang="ts">
import { stacks } from "~/data/portfolio";

const words = stacks.flatMap((g) => g.items.map((i) => i.name));
</script>

<template>
  <!-- Decorative band — the same info is listed accessibly in the Stack section -->
  <div aria-hidden="true" class="relative z-10 -my-6 overflow-hidden py-6">
    <div class="-rotate-2 bg-accent py-4 text-ink">
      <div class="animate-marquee flex w-max gap-8 font-display text-3xl font-extrabold tracking-tight uppercase md:text-5xl">
        <template v-for="copy in 2" :key="copy">
          <span v-for="word in words" :key="copy + word" class="flex items-center gap-8 whitespace-nowrap">
            {{ word }} <span class="text-white">✦</span>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
