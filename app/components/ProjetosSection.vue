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
      <SecaoTitulo kicker="Projetos">
        Da bancada para a <span class="text-primaria">competição</span>.
      </SecaoTitulo>
      <div class="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <ProjetoCard
          v-for="(projeto, index) in projetosVisiveis"
          :key="projeto.slug"
          v-reveal="{ delay: index * 150 }"
          :projeto="projeto"
        />
      </div>
      <div v-if="projetos.length > LIMITE_INICIAL" class="mt-14 flex justify-center">
        <BotaoAcao secundario claro @click="mostrarTodos = !mostrarTodos">
          {{ mostrarTodos ? "Ver menos projetos" : "Ver todos os projetos" }}
        </BotaoAcao>
      </div>
    </div>
  </section>
</template>
