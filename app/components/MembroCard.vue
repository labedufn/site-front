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
    { url: `mailto:${props.membro.email}`, icone: "lucide:mail", label: `E-mail de ${props.membro.nome}` },
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
  <article class="group flex w-56 flex-col items-center text-center">
    <div
      class="rounded-full p-1.5 ring-1 ring-white/15 transition-colors duration-300 group-hover:ring-primaria/70"
    >
      <NuxtImg
        v-if="membro.foto"
        :src="membro.foto"
        :alt="`Foto de ${membro.nome}`"
        class="size-40 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        width="160"
        height="160"
        loading="lazy"
      />
      <div v-else class="flex size-40 items-center justify-center rounded-full bg-white/5 text-primaria/70">
        <Icon name="lucide:user" size="56" aria-hidden="true" />
      </div>
    </div>

    <h3 class="titulo-display mt-6 text-base font-bold text-white">{{ membro.nome }}</h3>

    <p class="mt-3 flex items-center gap-2 text-xs tracking-[0.15em] text-white/50 uppercase">
      <Icon :name="iconesCurso[membro.curso]" size="15" class="text-primaria/80" aria-hidden="true" />
      {{ membro.curso }}
    </p>

    <div class="mt-4 flex items-center gap-4">
      <a
        v-for="rede in redes"
        :key="rede.url"
        :href="rede.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="rede.label"
        class="text-white/50 transition-colors duration-300 hover:text-primaria focus-visible:text-primaria"
      >
        <Icon :name="rede.icone" size="20" />
      </a>
    </div>
  </article>
</template>
