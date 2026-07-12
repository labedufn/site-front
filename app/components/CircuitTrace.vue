<script setup lang="ts">
/**
 * Trilhas de circuito decorativas que se desenham conforme o scroll (GSAP +
 * ScrollTrigger). Sem JS ou com prefers-reduced-motion, aparecem já desenhadas.
 */
const raiz = ref<SVGElement | null>(null);

onMounted(async () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = raiz.value;
  if (!el) return;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);
  gsap.registerPlugin(ScrollTrigger);

  const trilhas = el.querySelectorAll<SVGPathElement>("path");
  trilhas.forEach((trilha, indice) => {
    const comprimento = trilha.getTotalLength();
    gsap.fromTo(
      trilha,
      { strokeDasharray: comprimento, strokeDashoffset: comprimento },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 55%",
          scrub: 0.5,
        },
        delay: indice * 0.1,
      },
    );
  });

  const pads = el.querySelectorAll<SVGCircleElement>("circle");
  gsap.from(pads, {
    scale: 0,
    transformOrigin: "center",
    stagger: 0.15,
    scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 55%", scrub: 0.5 },
  });
});
</script>

<template>
  <div class="flex justify-center py-6" aria-hidden="true">
    <svg ref="raiz" viewBox="0 0 240 140" class="h-32 w-60 opacity-70">
      <g fill="none" stroke="var(--color-primaria)" stroke-width="2" stroke-linejoin="round">
        <path d="M120 0 V52 L88 84 V140" />
        <path d="M152 0 V40 L184 72 V116" opacity="0.45" />
        <path d="M88 0 V28 L56 60 V96" opacity="0.3" />
      </g>
      <g fill="var(--color-primaria)">
        <circle cx="88" cy="140" r="4" />
        <circle cx="184" cy="116" r="4" opacity="0.45" />
        <circle cx="56" cy="96" r="4" opacity="0.3" />
      </g>
    </svg>
  </div>
</template>
