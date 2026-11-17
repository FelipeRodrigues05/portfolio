<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "pt-BR" },
  meta: [{ name: "theme-color", content: "#09090b" }],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  script: [
    // Runs before first paint: enables reveal animations only when JS is available,
    // so the static HTML is fully readable without JavaScript.
    { innerHTML: "document.documentElement.classList.add('js')", tagPosition: "head" },
  ],
});
</script>

<template>
  <div aria-hidden="true" class="grain" />
  <NuxtPage />
</template>
