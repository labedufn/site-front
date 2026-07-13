<script setup lang="ts">
defineProps<{
  classeCor?: string;
}>();
</script>

<template>
  <svg
    viewBox="0 0 400 28"
    preserveAspectRatio="none"
    aria-hidden="true"
    class="block h-4 w-full md:h-5"
    :class="classeCor ?? 'text-primaria'"
  >
    <path
      d="M0 14 H150 L172 4 L204 24 L226 14 H400"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linejoin="round"
    />
  </svg>
</template>
