<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";

const ponto = ref<HTMLElement | null>(null);
let contexto: gsap.Context | undefined;

onMounted(() => {
  if (movimentoReduzido()) return;
  const el = ponto.value;
  if (!el) return;

  contexto = gsap.context(() => {
    gsap
      .timeline({ repeat: -1, defaults: { ease: "none" } })
      .fromTo(el, { top: "29%", opacity: 1 }, { top: "50%", duration: 0.4, ease: "power1.in" })
      .to(el, { opacity: 0, duration: 0.85 })
      .set(el, { top: "29%" })
      .to({}, { duration: 1.25 });
  });
});

onUnmounted(() => contexto?.revert());
</script>

<template>
  <a href="#sobre" aria-label="Rolar para a seção Sobre" class="mouse group">
    <span ref="ponto" class="mouse-ponto" />
  </a>
</template>

<style scoped>
.mouse {
  position: relative;
  display: block;
  width: 35px;
  height: 55px;
  margin-inline: auto;
  border: 3px solid white;
  border-radius: 23px;
  transition: border-color 0.3s ease-in-out;
}

.mouse:hover,
.mouse:focus-visible {
  border-color: var(--color-primaria);
}

.mouse-ponto {
  position: absolute;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: white;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
}

.mouse:hover .mouse-ponto,
.mouse:focus-visible .mouse-ponto {
  background-color: var(--color-primaria);
}
</style>
