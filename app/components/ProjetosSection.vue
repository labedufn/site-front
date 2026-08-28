<script setup lang="ts">
import { projetos } from "~/data/projetos";

const DESTAQUES = 3;
const destaques = projetos.slice(0, DESTAQUES);
</script>

<template>
  <section id="projetos" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <SecaoTitulo>
        Da bancada para a <span class="text-primaria">prática</span>.
      </SecaoTitulo>
      <div class="flex flex-col gap-20 md:gap-32">
        <ProjetoCard
          v-for="(projeto, index) in destaques"
          :key="projeto.slug"
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
