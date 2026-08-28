<script setup lang="ts">
defineProps<{
  kicker: string;
  centralizado?: boolean;
}>();
</script>

<template>
  <div
    class="intersect-once intersect:revelar mb-12 md:mb-16"
    :class="centralizado && 'flex flex-col items-center text-center'"
  >
    <p
      class="titulo-display mb-4 text-sm font-medium tracking-[0.35em] text-primaria/90 md:text-base"
    >
      {{ kicker }}
    </p>
    <div class="mb-8 w-24 text-primaria">
      <RaioLinha />
    </div>
    <h2
      class="titulo-display max-w-3xl text-2xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl"
    >
      <slot />
    </h2>
  </div>
</template>
