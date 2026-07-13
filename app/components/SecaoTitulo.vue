<script setup lang="ts">
/**
 * Cabeçalho editorial de seção: kicker ciano, raio-linha e statement.
 * O título vai no slot para permitir palavras destacadas.
 */
defineProps<{ kicker: string }>();
</script>

<template>
  <div v-reveal class="mb-12 md:mb-16">
    <p class="titulo-display mb-4 text-sm font-medium tracking-[0.35em] text-primaria/90 md:text-base">
      {{ kicker }}
    </p>
    <div class="mb-8 w-24 text-primaria">
      <RaioLinha />
    </div>
    <h2
      class="titulo-display max-w-3xl text-2xl leading-[1.25] font-bold text-balance sm:text-4xl xl:text-5xl"
    >
      <slot />
    </h2>
  </div>
</template>
