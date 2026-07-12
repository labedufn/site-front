<script setup lang="ts">
import type { Projeto } from "~/data/projetos";

defineProps<{ projeto: Projeto }>();
</script>

<template>
  <NuxtLink
    :to="`/projetos/${projeto.slug}`"
    class="group block w-100 max-w-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article
      class="flex h-full flex-col overflow-hidden rounded-2xl border border-cinza/60 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgb(0_16_19/0.12)]"
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
      <div class="flex flex-1 flex-col p-6 text-left">
        <span
          class="mb-3 w-fit rounded-full bg-primaria/10 px-3 py-1 text-xs font-bold tracking-wider text-primaria-escura uppercase"
        >
          {{ projeto.tag }}
        </span>
        <h3 class="titulo-display mb-3 text-lg font-bold text-escuro md:text-xl">
          {{ projeto.titulo }}
        </h3>
        <p class="mb-5 flex-1 text-sm text-escuro/75">{{ projeto.descricao }}</p>
        <span class="inline-flex items-center gap-2 text-sm font-bold text-primaria-escura">
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
