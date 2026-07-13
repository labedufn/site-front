<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";

defineProps<{
  classeCor?: string;
}>();

const caminho = ref<SVGPathElement | null>(null);
let contexto: gsap.Context | undefined;

onMounted(() => {
  if (movimentoReduzido()) return;
  const el = caminho.value;
  if (!el) return;

  const comprimento = el.getTotalLength();

  contexto = gsap.context(() => {
    gsap.set(el, { strokeDasharray: comprimento, strokeDashoffset: comprimento });

    gsap
      .timeline({
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      })
      .to(el, { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" })
      .to(el, {
        keyframes: [{ opacity: 0.35 }, { opacity: 1 }, { opacity: 0.55 }, { opacity: 1 }],
        duration: 0.35,
        ease: "none",
      });
  });
});

onUnmounted(() => contexto?.revert());
</script>

<template>
  <svg
    viewBox="0 0 400 28"
    preserveAspectRatio="none"
    aria-hidden="true"
    class="block h-4 w-full md:h-5"
    :class="classeCor ?? 'text-primaria'"
  >
    <path
      ref="caminho"
      d="M0 14 H150 L172 4 L204 24 L226 14 H400"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linejoin="round"
    />
  </svg>
</template>
