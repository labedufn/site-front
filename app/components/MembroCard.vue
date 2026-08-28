<script setup lang="ts">
import type { Curso, Membro } from "~/data/membros";

const props = defineProps<{ membro: Membro }>();

const iconesCurso: Record<Curso, string> = {
  "Ciência da Computação": "lucide:code-xml",
  "Ciência de Dados": "lucide:chart-column",
  "Engenharia Biomédica": "lucide:cog",
  "Jogos Digitais": "lucide:gamepad-2",
  "PPG Nanociências": "lucide:atom",
  "Professor Orientador": "lucide:presentation",
  Egresso: "lucide:graduation-cap",
};

const redes = computed(() => {
  const lista: { url: string; icone: string; label: string }[] = [
    {
      url: `mailto:${props.membro.email}`,
      icone: "lucide:mail",
      label: `E-mail de ${props.membro.nome}`,
    },
  ];
  if (props.membro.instagram)
    lista.push({
      url: props.membro.instagram,
      icone: "fa6-brands:instagram",
      label: `Instagram de ${props.membro.nome}`,
    });
  if (props.membro.github)
    lista.push({
      url: props.membro.github,
      icone: "fa6-brands:github",
      label: `GitHub de ${props.membro.nome}`,
    });
  if (props.membro.lattes)
    lista.push({
      url: props.membro.lattes,
      icone: "academicons:lattes",
      label: `Currículo Lattes de ${props.membro.nome}`,
    });
  return lista;
});
</script>

<template>
  <article class="group flex w-full max-w-56 flex-col items-center text-center">
    <div
      class="rounded-full p-1.5 ring-1 ring-white/15 transition-colors duration-300 group-hover:ring-primaria/70"
    >
      <NuxtImg
        v-if="membro.foto"
        :src="membro.foto"
        :alt="`Foto de ${membro.nome}`"
        class="size-28 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:size-32 md:size-40"
        width="160"
        height="160"
        loading="lazy"
      />
      <div
        v-else
        class="flex size-28 items-center justify-center rounded-full bg-white/5 text-primaria/70 sm:size-32 md:size-40"
      >
        <Icon name="lucide:user" class="size-12 sm:size-14 md:size-16" aria-hidden="true" />
      </div>
    </div>

    <h3 class="titulo-display mt-5 text-sm font-bold text-white sm:mt-6 sm:text-base">
      {{ membro.nome }}
    </h3>

    <p
      class="mt-2 flex items-center gap-1.5 text-[0.65rem] tracking-[0.15em] text-white/50 uppercase sm:mt-3 sm:gap-2 sm:text-xs"
    >
      <Icon
        :name="iconesCurso[membro.curso] ?? 'lucide:graduation-cap'"
        size="13"
        class="text-primaria/80 sm:size-[15]"
        aria-hidden="true"
      />
      {{ membro.curso }}
    </p>

    <div class="mt-3 flex items-center gap-3 sm:mt-4 sm:gap-4">
      <a
        v-for="rede in redes"
        :key="rede.url"
        :href="rede.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="rede.label"
        class="text-white/50 transition-colors duration-300 hover:text-primaria focus-visible:text-primaria"
      >
        <Icon :name="rede.icone" size="18" class="sm:size-5" />
      </a>
    </div>
  </article>
</template>
