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
  const lista: { url: string; icone?: string; imagem?: string; label: string }[] = [
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
      imagem: "/img/icons/lattes.svg",
      label: `Currículo Lattes de ${props.membro.nome}`,
    });
  return lista;
});
</script>

<template>
  <article
    class="group flex flex-col items-center rounded-xl border border-escuro-claro bg-superficie p-8 text-center transition-colors duration-300 hover:border-primaria/60"
  >
    <!-- Foto em duotone ciano; ganha cor no hover/foco -->
    <div class="overflow-hidden rounded-full bg-primaria">
      <NuxtImg
        v-if="membro.foto"
        :src="membro.foto"
        :alt="`Foto de ${membro.nome}`"
        class="size-36 object-cover grayscale transition-all duration-500 mix-blend-luminosity group-focus-within:mix-blend-normal group-focus-within:grayscale-0 group-hover:mix-blend-normal group-hover:grayscale-0"
        width="160"
        height="160"
        loading="lazy"
      />
      <div v-else class="flex size-36 items-center justify-center bg-superficie text-primaria">
        <Icon name="lucide:user" size="56" aria-hidden="true" />
      </div>
    </div>

    <h3 class="titulo-display mt-6 text-base font-bold text-white">{{ membro.nome }}</h3>

    <p class="mt-2 flex items-center gap-2 font-mono text-xs text-texto-suave">
      <Icon :name="iconesCurso[membro.curso]" size="16" class="text-primaria" aria-hidden="true" />
      {{ membro.curso }}
    </p>

    <div class="mt-5 flex items-center gap-4 border-t border-escuro-claro pt-5">
      <a
        v-for="rede in redes"
        :key="rede.url"
        :href="rede.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="rede.label"
        class="text-texto-suave transition-colors duration-300 hover:text-primaria focus-visible:text-primaria"
      >
        <Icon v-if="rede.icone" :name="rede.icone" size="22" />
        <img
          v-else-if="rede.imagem"
          :src="rede.imagem"
          alt=""
          class="size-5.5 opacity-70 brightness-0 invert transition-opacity hover:opacity-100"
          width="22"
          height="22"
        >
      </a>
    </div>
  </article>
</template>
