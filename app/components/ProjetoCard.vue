<script setup lang="ts">
import type { Projeto } from "~/data/projetos";

defineProps<{ projeto: Projeto }>();
</script>

<template>
  <NuxtLink
    :to="`/projetos/${projeto.slug}`"
    class="group block w-100 max-w-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article class="flex flex-col items-center">
      <div class="w-full overflow-hidden rounded-xl">
        <NuxtImg
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="h-65 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width="400"
          height="260"
          loading="lazy"
        />
      </div>
      <div class="text-center text-escuro">
        <h3 class="titulo-display my-4 text-lg font-bold md:text-2xl">{{ projeto.titulo }}</h3>
        <p class="text-base">{{ projeto.descricao }}</p>
      </div>
    </article>
  </NuxtLink>
</template>
