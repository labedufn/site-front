<script setup lang="ts">
import { projetos } from "~/data/projetos";
</script>

<template>
  <section id="projetos" class="scroll-mt-20 py-16 md:py-24">
    <div class="container-site">
      <SecaoTitulo kicker="Projetos">
        Da bancada para a <span class="text-primaria">competição</span>.
      </SecaoTitulo>
      <div class="flex flex-col gap-16 md:gap-24">
        <ProjetoCard
          v-for="(projeto, index) in projetos"
          :key="projeto.slug"
          v-reveal
          :projeto="projeto"
          :invertido="index % 2 === 1"
        />
      </div>
    </div>
  </section>
</template>
