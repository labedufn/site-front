<script setup lang="ts">
defineProps<{
  classeFill?: string;
  invertido?: boolean;
}>();
</script>

<template>
  <svg
    viewBox="0 0 1440 76"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="block h-auto w-full min-h-6 sm:min-h-10"
    :class="[classeFill ?? 'fill-primaria', invertido && 'rotate-180']"
    preserveAspectRatio="none"
  >
    <path
      d="M706.098 7.77107L0 76V0H1440V6.5L732.404 74.7318C725.354 75.4116 719.252 69.8697 719.252 62.7872V19.7154C719.252 12.6319 713.149 7.08978 706.098 7.77107Z"
    />
  </svg>
</template>
