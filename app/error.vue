<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const ehNaoEncontrado = computed(() => props.error.statusCode === 404);

useSeoMeta({
  title: ehNaoEncontrado.value ? "Página não encontrada | LABED" : "Erro | LABED",
});
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-escuro px-6 text-center text-white">
    <img src="/img/logos/logo_abreviado.svg" alt="LABED" class="w-24" width="96" height="60" >
    <h1 class="titulo-display text-6xl font-extrabold md:text-8xl">{{ error.statusCode }}</h1>
    <p class="max-w-md text-lg">
      {{
        ehNaoEncontrado
          ? "A página que você procura não existe ou foi movida."
          : "Ocorreu um erro inesperado. Tente novamente mais tarde."
      }}
    </p>
    <BotaoAcao @click="clearError({ redirect: '/' })">Voltar ao início</BotaoAcao>
  </div>
</template>
