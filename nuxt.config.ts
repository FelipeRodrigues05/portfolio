// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-11-17",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],

  // Inline the CSS into the prerendered HTML so the page never depends on a
  // separately hashed stylesheet (its name varies with the build path).
  features: { inlineStyles: true },

  vite: {
    plugins: [tailwindcss()],
  },

  // Self-hosted fonts (no request to Google at runtime)
  fonts: {
    families: [
      { name: "Bricolage Grotesque", provider: "google", weights: ["400 800"] },
      { name: "JetBrains Mono", provider: "google", weights: [400, 500] },
    ],
  },

  // Bundle every icon used into the client — no API calls on a static host
  icon: {
    serverBundle: "local",
    clientBundle: {
      scan: { globInclude: ["app/**/*.{vue,ts}"] },
    },
  },

  // Static site: `bun run generate` outputs plain HTML to .output/public
  nitro: {
    prerender: { routes: ["/"], crawlLinks: true },
  },
});
