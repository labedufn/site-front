import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export function movimentoReduzido(): boolean {
  return import.meta.server || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
