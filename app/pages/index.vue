<script setup lang="ts">
import { site } from "~/data/portfolio";

useSeoMeta({
  title: site.title,
  description: site.description,
  ogTitle: site.title,
  ogDescription: site.description,
  ogType: "website",
  ogLocale: "pt_BR",
  ogImage: site.avatar,
  twitterCard: "summary",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        jobTitle: site.role,
        email: `mailto:${site.email}`,
        address: { "@type": "PostalAddress", addressLocality: site.location },
        sameAs: [
          "https://github.com/FelipeRodrigues05",
          "https://www.linkedin.com/in/felipe-barbosa-rodrigues/",
        ],
      }),
    },
  ],
});
</script>

<template>
  <div>
    <SiteHeader />
    <main id="conteudo">
      <Hero />
      <SiteMarquee />
      <About />
      <Experience />
      <Projects />
      <ProjectsStacks />
    </main>
    <Contact />
  </div>
</template>
