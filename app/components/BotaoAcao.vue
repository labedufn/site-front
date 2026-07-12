<script setup lang="ts">
const props = defineProps<{
  /** Quando presente, renderiza um link; caso contrário, um botão. */
  to?: string;
  secundario?: boolean;
}>();

const classes = computed(() => [
  "inline-block cursor-pointer rounded px-6 py-4 text-base font-bold transition-all duration-300 md:px-10",
  props.secundario
    ? "border border-primaria/40 bg-primaria/5 text-white hover:border-primaria hover:bg-primaria/15"
    : "bg-primaria text-escuro brilho-led hover:brightness-110",
]);
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes">
    <slot />
  </button>
</template>
