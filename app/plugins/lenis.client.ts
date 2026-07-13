import Lenis from "lenis";
import { gsap, ScrollTrigger, movimentoReduzido } from "~/utils/animacao";

export default defineNuxtPlugin(() => {
  if (movimentoReduzido()) {
    return { provide: { lenis: undefined as Lenis | undefined } };
  }

  const lenis = new Lenis({ lerp: 0.12, autoRaf: false, anchors: true });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((tempo) => lenis.raf(tempo * 1000));
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.clearScrollMemory("manual");

  return { provide: { lenis: lenis as Lenis | undefined } };
});
