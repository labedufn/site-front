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
  <section id="sobre" class="my-10 scroll-mt-20 overflow-hidden md:my-20">
    <div class="container-site">
      <div class="flex flex-col-reverse items-center gap-10 min-[1000px]:flex-row">
        <div v-reveal class="text-escuro max-[1000px]:text-center">
          <p class="titulo-display mb-3 text-xl font-medium md:mb-4 md:text-3xl">Sobre o</p>
          <h2 class="titulo-display mb-4 text-2xl font-bold sm:text-4xl md:mb-8 xl:text-5xl">
            Laboratório de Eletrônica e Desenvolvimento
          </h2>
          <div class="mb-8 space-y-4 text-base md:text-xl">
            <p>
              O LABED (Laboratório de Eletrônica e Desenvolvimento) da Universidade Franciscana é uma
              iniciativa pioneira que reflete o compromisso da instituição com a educação moderna e
              interativa, alinhada à expansão global do movimento Maker. Este laboratório foi
              desenvolvido para oferecer à comunidade acadêmica um espaço dinâmico e equipado para a
              prática e aprofundamento em áreas de robótica, programação, tecnologia, e muito mais,
              fomentando assim o aprendizado ativo.
            </p>
            <p>
              Os objetivos principais incluem estimular a criatividade, inovação, trabalho em equipe,
              pensamento crítico, e resolver problemas através do desenvolvimento de projetos práticos.
              Com projetos que já se destacaram em diversos eventos e feiras tecnológicas, o LABED se
              estabelece como um marco no engajamento e na disseminação do conhecimento tecnológico na
              Universidade Franciscana e na comunidade ao redor, destacando-se como um modelo de
              inovação educacional e colaboração multidisciplinar.
            </p>
          </div>

          <dl class="mb-8 flex flex-wrap gap-x-12 gap-y-4 max-[1000px]:justify-center">
            <div v-for="numero in numeros" :key="numero.rotulo">
              <dt class="sr-only">{{ numero.rotulo }}</dt>
              <dd class="titulo-display text-3xl font-bold text-primaria-escura md:text-4xl">
                {{ String(numero.valor).padStart(2, "0") }}
              </dd>
              <dd class="mt-1 text-sm text-escuro/70">{{ numero.rotulo }}</dd>
            </div>
          </dl>

          <BotaoAcao to="/#projetos">Conheça nossos projetos</BotaoAcao>
        </div>
        <NuxtImg
          v-reveal="{ delay: 200 }"
          src="/img/ilustracoes/chiko_desenho.png"
          alt="Desenho técnico de um robô de combate do LABED"
          class="min-[1000px]:ml-6"
          width="700"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
