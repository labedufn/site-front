<script setup lang="ts">
import { membros } from "~/data/membros";
import { projetos } from "~/data/projetos";

const numeros = [
  { valor: String(membros.length).padStart(2, "0"), rotulo: "membros" },
  { valor: String(projetos.length).padStart(2, "0"), rotulo: "projetos em vitrine" },
  { valor: "03", rotulo: "áreas de atuação" },
];
</script>

<template>
  <section id="sobre" class="scroll-mt-20 overflow-hidden py-16 md:py-24">
    <div class="container-site">
      <div class="flex flex-col-reverse items-center gap-12 min-[1000px]:flex-row">
        <div v-reveal class="min-w-0 flex-1">
          <SectionTitle kicker="sobre o lab" titulo="Laboratório de Eletrônica e Desenvolvimento" />
          <div class="mb-8 space-y-4 text-texto-suave md:text-lg">
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
              Universidade Franciscana e na comunidade ao redor.
            </p>
          </div>

          <dl class="mb-10 flex flex-wrap gap-x-12 gap-y-6">
            <div v-for="numero in numeros" :key="numero.rotulo">
              <dt class="sr-only">{{ numero.rotulo }}</dt>
              <dd class="font-mono text-3xl font-bold text-primaria md:text-4xl">
                {{ numero.valor }}
              </dd>
              <dd class="mt-1 font-mono text-sm text-texto-suave">{{ numero.rotulo }}</dd>
            </div>
          </dl>

          <BotaoAcao to="/#projetos">Conheça nossos projetos</BotaoAcao>
        </div>

        <!-- Folha de desenho técnico -->
        <div v-reveal="{ delay: 200 }" class="w-full max-w-xl flex-1">
          <figure class="rounded-2xl border border-cinza/40 bg-white p-6 md:p-8">
            <NuxtImg
              src="/img/ilustracoes/chiko_desenho.png"
              alt="Desenho técnico de um robô de combate do LABED"
              class="w-full"
              width="700"
              loading="lazy"
            />
            <figcaption class="mt-4 flex items-center justify-between font-mono text-xs text-escuro/60">
              <span>fig. 01 — robô de combate</span>
              <span>labed // ufn</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <CircuitTrace />
  </section>
</template>
