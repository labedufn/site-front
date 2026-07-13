<script setup lang="ts">
import { membros } from "~/data/membros";
import { projetos } from "~/data/projetos";

const numeros = [
  { valor: membros.length, rotulo: "membros" },
  { valor: projetos.length, rotulo: "projetos" },
  { valor: 3, rotulo: "áreas de atuação" },
];
</script>

<template>
  <section id="sobre" class="relative scroll-mt-20 overflow-hidden bg-escuro py-20 text-white md:py-32">
    <!-- Desenho técnico sangrando na borda direita, invertido para o fundo escuro -->
    <NuxtImg
      src="/img/ilustracoes/chiko_desenho.png"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute top-1/2 right-0 max-w-none -translate-y-1/2 opacity-55 select-none [filter:invert(1)_hue-rotate(180deg)] max-[999px]:hidden min-[1000px]:w-[85vw] min-[1000px]:max-w-350 min-[1000px]:translate-x-[60%] min-[1400px]:translate-x-[45%] min-[1800px]:translate-x-[35%] min-[2200px]:w-[95vw] min-[2200px]:translate-x-[30%]"
      width="1400"
      loading="lazy"
    />

    <div class="container-site relative">
      <div v-reveal class="min-[1000px]:w-3/5">
        <p class="titulo-display mb-4 text-sm font-medium tracking-[0.35em] text-primaria md:text-base">
          Sobre o lab
        </p>
        <div class="mb-10 w-24 text-primaria">
          <RaioLinha />
        </div>

        <h2
          class="titulo-display mb-10 max-w-3xl text-2xl leading-[1.25] font-bold text-balance sm:text-4xl xl:text-5xl"
        >
          Um espaço <span class="text-primaria">maker</span> para aprender fazendo.
        </h2>

        <div class="mb-12 max-w-2xl space-y-5 text-base leading-relaxed text-white/65 md:text-lg">
          <p>
            O LABED (Laboratório de Eletrônica e Desenvolvimento) da Universidade Franciscana é uma
            iniciativa pioneira que reflete o compromisso da instituição com a educação moderna e
            interativa, alinhada à expansão global do movimento Maker. Um espaço dinâmico e equipado
            para a prática e aprofundamento em robótica, programação e tecnologia, fomentando o
            aprendizado ativo.
          </p>
          <p>
            Estimulamos criatividade, inovação, trabalho em equipe e pensamento crítico através de
            projetos práticos, que já se destacaram em diversos eventos e feiras tecnológicas,
            levando conhecimento à Universidade Franciscana e à comunidade ao redor.
          </p>
        </div>

        <dl class="mb-14 flex flex-wrap gap-x-14 gap-y-8">
          <div v-for="numero in numeros" :key="numero.rotulo" class="border-l border-primaria/70 pl-5">
            <dt class="sr-only">{{ numero.rotulo }}</dt>
            <dd class="titulo-display text-3xl font-bold text-white md:text-5xl">
              <NumeroAnimado :valor="numero.valor" />
            </dd>
            <dd class="mt-2 text-xs tracking-[0.2em] text-white/50 uppercase">{{ numero.rotulo }}</dd>
          </div>
        </dl>

        <NuxtLink
          to="/#projetos"
          class="inline-block cursor-pointer rounded border border-primaria/80 px-6 py-4 text-base font-bold text-primaria transition-colors duration-300 hover:bg-primaria hover:text-escuro md:px-10"
        >
          Conheça nossos projetos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
