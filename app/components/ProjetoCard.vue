<script setup lang="ts">
import type { Projeto } from "~/data/projetos";

defineProps<{ projeto: Projeto }>();
</script>

<template>
  <NuxtLink
    :to="`/projetos/${projeto.slug}`"
    class="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article
      class="flex h-full flex-col overflow-hidden rounded-xl border border-escuro-claro bg-superficie transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primaria/60"
    >
      <div class="overflow-hidden">
        <NuxtImg
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width="480"
          height="270"
          loading="lazy"
        />
      </div>
      <div class="flex flex-1 flex-col p-6">
        <p class="label-tecnico mb-2 text-xs">// {{ projeto.tag }}</p>
        <h3 class="titulo-display mb-3 text-lg font-bold text-white">{{ projeto.titulo }}</h3>
        <p class="mb-6 flex-1 text-sm text-texto-suave">{{ projeto.descricao }}</p>
        <span class="inline-flex items-center gap-2 font-mono text-sm text-primaria">
          Ver projeto
          <Icon
            name="lucide:arrow-right"
            size="16"
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  </NuxtLink>
</template>
