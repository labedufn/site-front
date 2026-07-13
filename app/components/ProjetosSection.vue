<script setup lang="ts">
import { projetos } from "~/data/projetos";

/** A home mostra só os destaques; a lista completa vive em /projetos. */
const DESTAQUES = 3;
const destaques = projetos.slice(0, DESTAQUES);
</script>

<template>
  <section id="projetos" class="scroll-mt-20 py-16 md:py-24">
    <div class="container-site">
      <SecaoTitulo kicker="Projetos">
        Da bancada para a <span class="text-primaria">competição</span>.
      </SecaoTitulo>
      <div class="flex flex-col gap-20 md:gap-32">
        <ProjetoCard
          v-for="(projeto, index) in destaques"
          :key="projeto.slug"
          v-reveal
          :projeto="projeto"
          :indice="index + 1"
          :invertido="index % 2 === 1"
        />
      </div>
      <div v-if="projetos.length > DESTAQUES" class="mt-16 flex justify-center md:mt-24">
        <BotaoAcao secundario claro to="/projetos">
          Ver todos os {{ projetos.length }} projetos
        </BotaoAcao>
      </div>
    </div>
  </section>
</template>
