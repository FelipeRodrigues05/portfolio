<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "pt-BR" },
  meta: [{ name: "theme-color", content: "#09090b" }],
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  ],
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
