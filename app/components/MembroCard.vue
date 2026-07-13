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

const primeiroNome = computed(() => props.membro.nome.split(" ")[0]);

const redes = computed(() => {
  const lista: { url: string; icone?: string; imagem?: string; label: string }[] = [
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
      imagem: "/img/icons/lattes.svg",
      label: `Currículo Lattes de ${props.membro.nome}`,
    });
  return lista;
});
</script>

<template>
  <div class="group w-70 max-w-full perspective-distant">
    <div
      class="relative h-full transition-transform duration-500 transform-3d group-focus-within:transform-[rotateY(180deg)] group-hover:transform-[rotateY(180deg)] motion-reduce:transition-none"
    >
      <!-- Frente -->
      <article
        class="flex flex-col items-center rounded-2xl bg-white p-10 shadow-[0_8px_40px_rgb(0_0_0/0.35)] transition-shadow duration-300 backface-hidden"
      >
        <NuxtImg
          v-if="membro.foto"
          :src="membro.foto"
          :alt="`Foto de ${membro.nome}`"
          class="size-50 rounded-full object-cover ring-2 ring-primaria/25"
          width="200"
          height="200"
          loading="lazy"
        />
        <div
          v-else
          class="flex size-50 items-center justify-center rounded-full bg-cinza/40 text-escuro"
        >
          <Icon name="lucide:user" size="80" aria-hidden="true" />
        </div>
        <div class="pt-10 text-center">
          <h3 class="titulo-display text-xl font-bold text-escuro">{{ primeiroNome }}</h3>
          <p class="pt-3 text-escuro">{{ membro.curso }}</p>
        </div>
      </article>

      <!-- Verso -->
      <div
        class="absolute inset-0 flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_8px_40px_rgb(0_0_0/0.35)] backface-hidden transform-[rotateY(180deg)]"
      >
        <div>
          <h3 class="titulo-display text-xl font-bold text-escuro">{{ primeiroNome }}</h3>
          <p class="pt-3 text-escuro">{{ membro.nome }}</p>
          <div class="flex items-center gap-2 pt-6 text-escuro">
            <Icon :name="iconesCurso[membro.curso]" size="24" aria-hidden="true" />
            <p class="font-bold">{{ membro.curso }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <a
            v-for="rede in redes"
            :key="rede.url"
            :href="rede.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="rede.label"
            class="text-escuro transition-colors duration-300 hover:text-primaria focus-visible:text-primaria"
          >
            <Icon v-if="rede.icone" :name="rede.icone" size="30" />
            <img
              v-else-if="rede.imagem"
              :src="rede.imagem"
              alt=""
              class="size-7.5"
              width="30"
              height="30"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
