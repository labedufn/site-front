<script setup lang="ts">
defineProps<{
  /** Kicker técnico exibido acima do título (ex.: "projetos"). */
  kicker: string;
  titulo: string;
  centralizado?: boolean;
}>();
</script>

<template>
  <div v-reveal class="mb-12" :class="centralizado ? 'text-center' : ''">
    <p class="label-tecnico mb-3">// {{ kicker }}</p>
    <h2 class="titulo-display text-2xl font-bold text-white sm:text-4xl xl:text-5xl">
      {{ titulo }}
    </h2>
    <!-- Pulso elétrico: assinatura visual da marca -->
    <svg
      viewBox="0 0 96 12"
      class="mt-5 h-3 w-24"
      :class="centralizado ? 'mx-auto' : ''"
      aria-hidden="true"
    >
      <path
        d="M0 6 H28 L36 1 L48 11 L56 6 H92"
        fill="none"
        stroke="var(--color-primaria)"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <circle cx="94" cy="6" r="2" fill="var(--color-primaria)" />
    </svg>
  </div>
</template>
