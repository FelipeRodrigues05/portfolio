/**
 * Cycles through `phrases`, "decoding" each one from random glyphs.
 * Returns the static first phrase on the server and for reduced-motion users.
 */
export function useScramble(phrases: string[], { hold = 2600, speed = 28 } = {}) {
  const text = ref(phrases[0] ?? "");
  const glyphs = "!<>-_\\/[]{}—=+*^?#01";
  let timer: ReturnType<typeof setTimeout> | undefined;
  let frame = 0;

  const scrambleTo = (target: string, done: () => void) => {
    const from = text.value;
    const length = Math.max(from.length, target.length);
    const queue = Array.from({ length }, (_, i) => ({
      to: target[i] ?? "",
      start: Math.floor(Math.random() * 12),
      end: Math.floor(Math.random() * 12) + 12,
    }));
    let tick = 0;
    const step = () => {
      let out = "";
      let complete = 0;
      queue.forEach((q, i) => {
        if (tick >= q.end) {
          complete++;
          out += q.to;
        } else if (tick >= q.start) {
          out += glyphs[Math.floor(Math.random() * glyphs.length)];
        } else {
          out += from[i] ?? "";
        }
      });
      text.value = out;
      tick++;
      if (complete === queue.length) return done();
      timer = setTimeout(step, speed);
    };
    step();
  };

  onMounted(() => {
    if (phrases.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const next = () => {
      frame = (frame + 1) % phrases.length;
      scrambleTo(phrases[frame]!, () => (timer = setTimeout(next, hold)));
    };
    timer = setTimeout(next, hold);
  });

  onBeforeUnmount(() => clearTimeout(timer));

  return text;
}
