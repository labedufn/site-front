<script setup lang="ts">
withDefaults(
  defineProps<{
    titulo: string;
    classeFundo: string;
    classeTexto: string;
    /** Fill do raio superior: cor da seção ANTERIOR (padrão branco). */
    classeFillTopo?: string;
    /** Fill do raio inferior: cor da seção SEGUINTE (padrão branco). */
    classeFillBase?: string;
  }>(),
  {
    classeFillTopo: "fill-white",
    classeFillBase: "fill-white",
  },
);
</script>

<template>
  <div :class="classeFundo" class="shadow-[inset_0_-6px_white]">
    <SectionDivisor :classe-fill="classeFillTopo" />
    <h2
      v-reveal
      class="titulo-display py-10 text-center text-2xl font-bold sm:text-4xl md:py-15 xl:text-5xl"
      :class="classeTexto"
    >
      {{ titulo }}
    </h2>
    <SectionDivisor :classe-fill="classeFillBase" invertido />
  </div>
</template>
