<script setup lang="ts">
defineProps<{
  titulo: string;
  /** Classe de fundo da faixa (ex.: bg-primaria, bg-escuro). */
  classeFundo: string;
  /** Classe de cor do título (ex.: text-escuro, text-white). */
  classeTexto: string;
}>();
</script>

<template>
  <div :class="classeFundo" class="shadow-[inset_0_-6px_white]">
    <SectionDivisor classe-fill="fill-white" />
    <h2
      v-reveal
      class="titulo-display py-10 text-center text-2xl font-bold sm:text-4xl md:py-15 xl:text-5xl"
      :class="classeTexto"
    >
      {{ titulo }}
    </h2>
    <SectionDivisor classe-fill="fill-white" invertido />
  </div>
</template>
