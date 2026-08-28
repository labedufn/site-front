import Lenis from "lenis";

export default defineNuxtPlugin(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { provide: { lenis: undefined as Lenis | undefined } };
  }

  const lenis = new Lenis({ lerp: 0.12, autoRaf: true, anchors: true });

  return { provide: { lenis: lenis as Lenis | undefined } };
});
