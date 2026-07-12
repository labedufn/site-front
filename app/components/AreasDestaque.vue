<script setup lang="ts">
const areas = [
  {
    icone: "lucide:cpu",
    titulo: "Eletrônica",
    descricao:
      "Usamos as mais variadas placas programáveis para criar circuitos, aplicando teoria em sistemas embarcados práticos.",
  },
  {
    icone: "lucide:code-xml",
    titulo: "Programação",
    descricao:
      "Em programação, criamos softwares e sistemas embarcados, focando em soluções práticas e acessíveis.",
  },
  {
    icone: "lucide:bot",
    titulo: "Robótica",
    descricao:
      "A nossa equipe de robótica participa de competições na área e desenvolve projetos do zero, mesclando prática e inovação.",
  },
];
</script>

<template>
  <div class="container-site relative z-10 -mt-10">
    <div class="grid gap-6 md:grid-cols-3">
      <article
        v-for="(area, index) in areas"
        :key="area.titulo"
        v-reveal="{ delay: index * 150 }"
        class="rounded-xl border border-escuro-claro bg-superficie p-8 transition-colors duration-300 hover:border-primaria/60"
      >
        <div class="mb-6 flex size-14 items-center justify-center rounded-lg bg-primaria/10 text-primaria">
          <Icon :name="area.icone" size="28" aria-hidden="true" />
        </div>
        <h2 class="titulo-display mb-3 text-lg font-bold text-white">{{ area.titulo }}</h2>
        <p class="text-texto-suave">{{ area.descricao }}</p>
      </article>
    </div>
  </div>
</template>
