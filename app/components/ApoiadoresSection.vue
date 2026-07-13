<script setup lang="ts">
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
            class="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
            style="will-change: transform"
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
