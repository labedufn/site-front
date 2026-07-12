<script setup lang="ts">
const areas = [
  {
    icone: "/img/icons/eletronica.svg",
    titulo: "Eletrônica",
    descricao:
      "Usamos as mais variadas placas programáveis para criar circuitos, aplicando teoria em sistemas embarcados práticos.",
  },
  {
    icone: "/img/icons/programacao.svg",
    titulo: "Programação",
    descricao:
      "Em programação, criamos softwares e sistemas embarcados, focando em soluções práticas e acessíveis.",
  },
  {
    icone: "/img/icons/robotica.svg",
    titulo: "Robótica",
    descricao:
      "A nossa equipe de robótica participa de competições na área e desenvolve projetos do zero, mesclando prática e inovação.",
  },
];
</script>

<template>
  <div class="bg-primaria">
    <div class="container-site">
      <div
        class="flex flex-col items-center justify-between gap-10 py-15 text-center min-[1400px]:flex-row min-[1400px]:py-20"
      >
        <div
          v-for="(area, index) in areas"
          :key="area.titulo"
          v-reveal="{ delay: index * 200 }"
          class="flex flex-col items-center"
        >
          <img :src="area.icone" :alt="''" class="mb-6 w-20 md:w-auto" width="96" height="96" aria-hidden="true" >
          <h2 class="titulo-display mb-3 text-xl font-bold text-escuro md:text-3xl">
            {{ area.titulo }}
          </h2>
          <p class="max-w-100 text-base text-escuro md:text-xl">{{ area.descricao }}</p>
        </div>
      </div>
    </div>
  </div>
  <SectionDivisor />
</template>
