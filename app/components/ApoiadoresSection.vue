<script setup lang="ts">
const logos = [
  { src: "/img/apoiadores/ufn.svg", nome: "Universidade Franciscana" },
  { src: "/img/apoiadores/sistemas_informacao.svg", nome: "Sistemas de Informação UFN" },
  { src: "/img/apoiadores/ufnbotz.svg", nome: "UFNBotz" },
  { src: "/img/apoiadores/solidworks.svg", nome: "SolidWorks" },
  { src: "/img/apoiadores/jogos_digitais.svg", nome: "Jogos Digitais UFN" },
  { src: "/img/apoiadores/ciencia_computacao.svg", nome: "Ciência da Computação UFN" },
  { src: "/img/apoiadores/conectare.svg", nome: "Conectare Hub de Inovação" },
];
</script>

<template>
  <section id="apoiadores" class="scroll-mt-20 bg-escuro">
    <SectionDivisor classe-fill="fill-white" />
    <h2 v-reveal class="titulo-display pt-10 pb-10 text-center text-xl font-bold text-white md:pt-15 md:text-2xl">
      Apoiadores
    </h2>
    <div class="container-site">
      <div v-reveal>
        <div class="overflow-hidden" role="region" aria-label="Logos dos apoiadores">
          <div class="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
            <img
              v-for="(logo, index) in [...logos, ...logos]"
              :key="index"
              :src="logo.src"
              :alt="index < logos.length ? logo.nome : ''"
              :aria-hidden="index >= logos.length"
              class="max-h-28 max-w-50 px-10"
              loading="lazy"
            >
          </div>
        </div>
        <div class="mt-15 h-px w-full bg-escuro-claro" />
      </div>
    </div>
  </section>
</template>
