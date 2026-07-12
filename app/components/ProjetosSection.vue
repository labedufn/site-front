<script setup lang="ts">
import { projetos } from "~/data/projetos";

const LIMITE_INICIAL = 3;
const mostrarTodos = ref(false);

const projetosVisiveis = computed(() =>
  mostrarTodos.value ? projetos : projetos.slice(0, LIMITE_INICIAL),
);
</script>

<template>
  <section id="projetos" class="scroll-mt-20 py-16 md:py-24">
    <div class="container-site">
      <SectionTitle centralizado kicker="projetos" titulo="Projetos" />
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjetoCard
          v-for="(projeto, index) in projetosVisiveis"
          :key="projeto.slug"
          v-reveal="{ delay: index * 150 }"
          :projeto="projeto"
        />
      </div>
      <div v-if="projetos.length > LIMITE_INICIAL" class="mt-12 flex justify-center">
        <BotaoAcao secundario @click="mostrarTodos = !mostrarTodos">
          {{ mostrarTodos ? "Ver menos projetos" : "Ver todos os projetos" }}
        </BotaoAcao>
      </div>
    </div>
    <CircuitTrace />
  </section>
</template>
