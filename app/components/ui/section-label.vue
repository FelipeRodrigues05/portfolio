<script setup lang="ts">
defineProps<{ index: string; label: string; id: string }>();
</script>

<template>
  <div v-reveal class="mb-12 flex items-center gap-4 font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase md:mb-20">
    <span class="text-accent">({{ index }})</span>
    <h2 :id="id" class="text-neutral-200">{{ label }}</h2>
    <span aria-hidden="true" class="h-px flex-1 bg-line" />
  </div>
</template>
