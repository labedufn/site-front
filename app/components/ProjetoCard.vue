<script setup lang="ts">
import type { Projeto } from "~/data/projetos";

defineProps<{
  projeto: Projeto;
  indice?: number;
  invertido?: boolean;
  compacto?: boolean;
}>();
</script>

<template>
  <NuxtLink
    v-if="compacto"
    :to="`/projetos/${projeto.slug}`"
    class="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article class="flex h-full flex-col">
      <div class="intersect-once intersect:limpar motion-duration-[1000ms] overflow-hidden rounded-2xl">
        <NuxtImg
          :class="'intersect-once intersect:motion-scale-in-125 motion-duration-[1400ms] motion-ease-out-cubic [animation-fill-mode:backwards]'"
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          width="480"
          height="270"
          loading="lazy"
        />
      </div>
      <div class="flex flex-1 flex-col pt-6">
        <p
          class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[100ms] mb-2 text-xs font-medium tracking-[0.3em] text-primaria/90 uppercase"
        >
          {{ projeto.tag }}
        </p>
        <h3 class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[190ms] titulo-display mb-3 text-lg leading-snug font-bold text-white">
          {{ projeto.titulo }}
        </h3>
        <p class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[280ms] mb-5 flex-1 text-sm leading-relaxed text-white/60">
          {{ projeto.descricao }}
        </p>
        <span class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[370ms] inline-flex items-center gap-2 text-sm font-bold text-primaria">
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

  <NuxtLink
    v-else
    :to="`/projetos/${projeto.slug}`"
    class="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article class="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        class="intersect-once intersect:limpar motion-duration-[1000ms] overflow-hidden rounded-2xl lg:col-span-7"
        :class="invertido && 'limpar-invertido lg:order-2'"
      >
        <NuxtImg
          :class="'intersect-once intersect:motion-scale-in-125 motion-duration-[1400ms] motion-ease-out-cubic [animation-fill-mode:backwards]'"
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          width="820"
          height="461"
          loading="lazy"
        />
      </div>
      <div class="relative lg:col-span-5">
        <span
          v-if="indice"
          aria-hidden="true"
          class="intersect-once intersect:motion-opacity-in-0 motion-duration-[800ms] motion-ease-out-quart motion-delay-[300ms] titulo-display pointer-events-none absolute -top-14 -left-2 text-8xl font-bold text-transparent select-none [-webkit-text-stroke:1px_rgb(34_181_211/0.3)] md:-top-20 md:text-9xl"
          :class="invertido ? 'intersect:motion-translate-x-in-[48px]' : 'intersect:motion-translate-x-in-[-48px]'"
        >
          {{ String(indice).padStart(2, "0") }}
        </span>
        <p
          class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[100ms] mb-3 text-xs font-medium tracking-[0.3em] text-primaria/90 uppercase"
        >
          {{ projeto.tag }}
        </p>
        <h3
          class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[190ms] titulo-display mb-4 text-xl leading-snug font-bold text-white md:text-3xl"
        >
          {{ projeto.titulo }}
        </h3>
        <p class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[280ms] mb-6 leading-relaxed text-white/60">{{ projeto.descricao }}</p>
        <span class="intersect-once intersect:revelar motion-duration-[800ms] motion-delay-[370ms] inline-flex items-center gap-2 text-sm font-bold text-primaria">
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
