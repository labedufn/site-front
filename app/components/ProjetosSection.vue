<script setup lang="ts">
import { projetos } from "~/data/projetos";

const LIMITE_INICIAL = 3;
const mostrarTodos = ref(false);

const projetosVisiveis = computed(() =>
  mostrarTodos.value ? projetos : projetos.slice(0, LIMITE_INICIAL),
);
</script>

<template>
  <section id="projetos" class="mb-10 scroll-mt-20 md:mb-20">
    <SectionHeader titulo="Projetos" classe-fundo="bg-primaria" classe-texto="text-escuro" />
    <div class="container-site">
      <div class="mt-10 mb-15 flex flex-wrap justify-center gap-10 lg:gap-19">
        <ProjetoCard
          v-for="(projeto, index) in projetosVisiveis"
          :key="projeto.slug"
          v-reveal="{ delay: index * 150 }"
          :projeto="projeto"
        />
      </div>
    </div>
    <div v-if="projetos.length > LIMITE_INICIAL" class="flex justify-center">
      <BotaoAcao secundario @click="mostrarTodos = !mostrarTodos">
        {{ mostrarTodos ? "Ver menos projetos" : "Ver todos os projetos" }}
      </BotaoAcao>
    </div>
  </section>
</template>
