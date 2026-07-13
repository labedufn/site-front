<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";

const faixa = ref<HTMLElement | null>(null);
let esteira: gsap.core.Tween | undefined;

onMounted(() => {
  if (movimentoReduzido()) return;
  const el = faixa.value;
  if (!el) return;
  esteira = gsap.to(el, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
});

onUnmounted(() => esteira?.kill());

function pausar() {
  if (esteira) gsap.to(esteira, { timeScale: 0, duration: 0.6, overwrite: true });
}

function retomar() {
  if (esteira) gsap.to(esteira, { timeScale: 1, duration: 0.6, overwrite: true });
}

const logos = [
  { src: "/img/apoiadores/ufn.svg", nome: "Universidade Franciscana" },
  { src: "/img/apoiadores/sistemas_informacao.svg", nome: "Sistemas de Informação UFN" },
  { src: "/img/apoiadores/ufnbotz.svg", nome: "UFNBotz" },
  { src: "/img/apoiadores/solidworks.svg", nome: "SolidWorks" },
  { src: "/img/apoiadores/jogos_digitais.svg", nome: "Jogos Digitais UFN" },
  { src: "/img/apoiadores/ciencia_computacao.svg", nome: "Ciência da Computação UFN" },
  { src: "/img/apoiadores/conectare.svg", nome: "Conectare Hub de Inovação" },
  { src: "/img/apoiadores/logo_oclz.svg", nome: "OCLZ" },
];
</script>

<template>
  <section id="apoiadores" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <p
        v-reveal
        class="titulo-display mb-12 text-center text-sm font-medium tracking-[0.35em] text-primaria/90 md:text-base"
      >
        Apoiadores
      </p>
      <div>
        <div
          class="overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          role="region"
          aria-label="Logos dos apoiadores"
        >
          <div
            ref="faixa"
            class="flex w-max items-center will-change-transform motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center"
            @mouseenter="pausar"
            @mouseleave="retomar"
          >
            <img
              v-for="(logo, index) in [...logos, ...logos]"
              :key="index"
              :src="logo.src"
              :alt="index < logos.length ? logo.nome : ''"
              :aria-hidden="index >= logos.length"
              class="max-h-28 max-w-56 px-12 opacity-60 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
