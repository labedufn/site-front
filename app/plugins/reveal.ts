import { gsap, movimentoReduzido } from "~/utils/animacao";

interface OpcoesReveal {
  delay?: number;
  y?: number;
  x?: number;
  escala?: number;
  duracao?: number;
  filhos?: boolean;
  intervalo?: number;
}

interface ElementoRevelado extends HTMLElement {
  __reveal?: { tween: gsap.core.Tween; aoImprimir: () => void };
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    getSSRProps: () => ({}),
    mounted(el: ElementoRevelado, binding) {
      if (movimentoReduzido()) return;

      const opcoes: OpcoesReveal = binding.value ?? {};
      const alvos = opcoes.filhos ? Array.from(el.children) : [el];
      if (alvos.length === 0) return;

      const tween = gsap.from(alvos, {
        opacity: 0,
        y: opcoes.y ?? 36,
        x: opcoes.x ?? 0,
        scale: opcoes.escala ?? 1,
        duration: opcoes.duracao ?? 1,
        delay: (opcoes.delay ?? 0) / 1000,
        ease: "power3.out",
        stagger: opcoes.intervalo ?? 0.12,
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });

      const aoImprimir = () => tween.progress(1);
      window.addEventListener("beforeprint", aoImprimir, { once: true });
      el.__reveal = { tween, aoImprimir };
    },
    unmounted(el: ElementoRevelado) {
      if (!el.__reveal) return;
      window.removeEventListener("beforeprint", el.__reveal.aoImprimir);
      el.__reveal.tween.scrollTrigger?.kill();
      el.__reveal.tween.kill();
      delete el.__reveal;
    },
  });
});
