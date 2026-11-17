import type { Directive } from "vue";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = () => window.matchMedia("(pointer: coarse)").matches;

/** Reveals an element once it enters the viewport (see [data-reveal] in main.css). */
const reveal: Directive<HTMLElement, string | undefined> = {
  getSSRProps: (binding) => ({ "data-reveal": binding.value ?? "" }),
  mounted(el, binding) {
    el.dataset.reveal = binding.value ?? "";
    // A fully clipped element never reports as intersecting, so for the
    // clip-path variant we watch the parent box instead.
    const target = binding.value === "clip" ? (el.parentElement ?? el) : el;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.classList.add("is-visible");
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    io.observe(target);
    (el as any).__revealIO = io;
  },
  unmounted(el) {
    (el as any).__revealIO?.disconnect();
  },
};

/** Feeds the cursor position into --x / --y for the .spotlight glow. */
const spotlight: Directive<HTMLElement> = {
  getSSRProps: () => ({}),
  mounted(el) {
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    (el as any).__spot = onMove;
  },
  unmounted(el) {
    el.removeEventListener("pointermove", (el as any).__spot);
  },
};

/** Element is gently pulled toward the cursor. Disabled on touch / reduced motion. */
const magnetic: Directive<HTMLElement, number | undefined> = {
  getSSRProps: () => ({}),
  mounted(el, binding) {
    if (reducedMotion() || coarsePointer()) return;
    const strength = binding.value ?? 0.35;
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const onLeave = () => (el.style.transform = "");
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    (el as any).__mag = { onMove, onLeave };
  },
  unmounted(el) {
    const h = (el as any).__mag;
    if (!h) return;
    el.removeEventListener("pointermove", h.onMove);
    el.removeEventListener("pointerleave", h.onLeave);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", reveal);
  nuxtApp.vueApp.directive("spotlight", spotlight);
  nuxtApp.vueApp.directive("magnetic", magnetic);
});
