<script setup lang="ts">
import { projetos } from "~/data/projetos";

const LIMITE_INICIAL = 3;
const mostrarTodos = ref(false);

const projetosVisiveis = computed(() =>
  mostrarTodos.value ? projetos : projetos.slice(0, LIMITE_INICIAL),
);
</script>

<template>
  <section id="projetos" class="scroll-mt-20">
    <SectionHeader
      titulo="Projetos"
      classe-fundo="bg-primaria"
      classe-texto="text-escuro"
      classe-fill-topo="fill-escuro"
      classe-fill-base="fill-escuro"
    />
    <div class="container-site">
      <div class="grid gap-x-8 gap-y-14 py-16 sm:grid-cols-2 lg:grid-cols-3 md:py-24">
        <ProjetoCard
          v-for="(projeto, index) in projetosVisiveis"
          :key="projeto.slug"
          v-reveal="{ delay: index * 150 }"
          :projeto="projeto"
        />
      </div>
    </div>
    <div v-if="projetos.length > LIMITE_INICIAL" class="flex justify-center pb-16 md:pb-24">
      <BotaoAcao secundario claro @click="mostrarTodos = !mostrarTodos">
        {{ mostrarTodos ? "Ver menos projetos" : "Ver todos os projetos" }}
      </BotaoAcao>
    </div>
  </section>
</template>
