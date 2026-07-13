<script setup lang="ts">
import { projetos } from "~/data/projetos";

useSeoMeta({
  title: "Projetos",
  description:
    "Todos os projetos do LABED, Laboratório de Eletrônica e Desenvolvimento da Universidade Franciscana: robótica, eletrônica e desenvolvimento na prática.",
  ogTitle: "Projetos | LABED",
  ogDescription: "Todos os projetos do LABED, da robótica de competição à realidade virtual.",
});
</script>

<template>
  <main>
    <div class="container-site pt-28 pb-16 md:pt-36 md:pb-24">
      <NuxtLink
        to="/#projetos"
        class="mb-10 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-primaria"
      >
        <Icon name="lucide:arrow-left" size="20" aria-hidden="true" />
        Voltar ao início
      </NuxtLink>

      <SecaoTitulo kicker="Projetos">
        Tudo que já saiu da <span class="text-primaria">bancada</span>.
      </SecaoTitulo>

      <div class="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <ProjetoCard
          v-for="projeto in projetos"
          :key="projeto.slug"
          compacto
          :projeto="projeto"
        />
      </div>
    </div>
  </main>
</template>
