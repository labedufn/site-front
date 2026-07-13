<script setup lang="ts">
import type { Projeto } from "~/data/projetos";

defineProps<{ projeto: Projeto }>();
</script>

<template>
  <NuxtLink
    :to="`/projetos/${projeto.slug}`"
    class="group block max-w-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article class="flex h-full flex-col">
      <div class="overflow-hidden rounded-2xl">
        <NuxtImg
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          width="480"
          height="270"
          loading="lazy"
        />
      </div>
      <div class="flex flex-1 flex-col pt-6">
        <p class="mb-2 text-xs font-medium tracking-[0.3em] text-primaria/90 uppercase">
          {{ projeto.tag }}
        </p>
        <h3 class="titulo-display mb-3 text-lg font-bold text-white md:text-xl">
          {{ projeto.titulo }}
        </h3>
        <p class="mb-5 flex-1 text-sm leading-relaxed text-white/60">{{ projeto.descricao }}</p>
        <span class="inline-flex items-center gap-2 text-sm font-bold text-primaria">
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
