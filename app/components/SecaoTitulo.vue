<script setup lang="ts">
defineProps<{
  centralizado?: boolean;
}>();
</script>

<template>
  <div
    class="intersect-once intersect:revelar mb-12 md:mb-16"
    :class="centralizado && 'flex flex-col items-center text-center'"
  >
    <h2
      class="titulo-display max-w-3xl text-2xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl"
    >
      <slot />
    </h2>
  </div>
</template>
