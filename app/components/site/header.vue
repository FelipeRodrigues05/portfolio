<script setup lang="ts">
import { site } from "~/data/portfolio";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

// Local time — client only, avoids hydration mismatch
const time = ref("--:--");
let interval: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  const fmt = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: site.timezone,
  });
  const tick = () => (time.value = fmt.format(new Date()));
  tick();
  interval = setInterval(tick, 30_000);
});
onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <a
    href="#conteudo"
    class="sr-only z-[70] rounded bg-accent px-4 py-2 font-mono text-sm text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
  >
    Pular para o conteúdo
  </a>

  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
    <nav
      aria-label="Principal"
      class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-ink/60 py-2 pr-2 pl-5 backdrop-blur-xl"
    >
      <a href="#topo" class="font-display text-lg font-extrabold tracking-tight" aria-label="Início">
        FR<span class="text-accent">.</span>
      </a>

      <ul class="hidden items-center gap-1 font-mono text-xs tracking-wider uppercase md:flex">
        <li v-for="(link, i) in links" :key="link.href">
          <a
            :href="link.href"
            class="group flex items-center gap-1.5 rounded-full px-3 py-2 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <span class="text-[10px] text-violet-400 group-hover:text-accent">0{{ i + 1 }}</span>
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <span class="hidden font-mono text-xs text-neutral-400 sm:block">
          <span class="sr-only">Horário local: </span>{{ time }} BRT
        </span>
        <a
          href="#contato"
          class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent"
        >
          Fale comigo
        </a>
      </div>
    </nav>
  </header>
</template>
