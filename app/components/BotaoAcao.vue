<script setup lang="ts">
const props = defineProps<{
  to?: string;
  secundario?: boolean;
  claro?: boolean;
}>();

const classes = computed(() => [
  "inline-block cursor-pointer rounded px-6 py-4 text-base font-bold transition-colors duration-300 md:px-10",
  props.secundario
    ? props.claro
      ? "border-2 border-white/70 bg-white/5 text-white hover:border-white hover:bg-white/15"
      : "border-2 border-escuro bg-transparent text-escuro hover:bg-escuro hover:text-white"
    : "bg-primaria text-escuro hover:bg-primaria/85",
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
