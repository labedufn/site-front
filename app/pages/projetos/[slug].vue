<script setup lang="ts">
import { projetos } from "~/data/projetos";

const route = useRoute();
const projeto = projetos.find((p) => p.slug === route.params.slug);

if (!projeto) {
  throw createError({ statusCode: 404, statusMessage: "Projeto não encontrado", fatal: true });
}

const siteConfig = useSiteConfig();
const urlProjeto = `${siteConfig.url}/projetos/${projeto.slug}`;
const mensagem = `Confira o projeto do LABED - ${projeto.titulo}: ${urlProjeto}`;

const compartilhar = [
  {
    label: "Compartilhar no Facebook",
    icone: "fa6-brands:facebook-f",
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlProjeto)}`,
  },
  {
    label: "Compartilhar no WhatsApp",
    icone: "fa6-brands:whatsapp",
    url: `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`,
  },
  {
    label: "Compartilhar no X",
    icone: "fa6-brands:x-twitter",
    url: `https://x.com/intent/tweet?text=${encodeURIComponent(mensagem)}`,
  },
];

const indiceAtual = projetos.indexOf(projeto);
const projetoAnterior = projetos[indiceAtual - 1];
const proximoProjeto = projetos[indiceAtual + 1];

useSeoMeta({
  title: `${projeto.titulo} | LABED`,
  description: projeto.descricao,
  ogTitle: `${projeto.titulo} | LABED`,
  ogDescription: projeto.descricao,
  ogImage: projeto.thumbnail,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <main v-if="projeto" class="bg-white">
    <!-- Respiro para a navbar fixa -->
    <div class="container-site max-w-250 pt-28 pb-16 md:pt-36 md:pb-24">
      <NuxtLink
        to="/#projetos"
        class="inline-flex items-center gap-2 text-escuro transition-colors hover:text-primaria"
      >
        <Icon name="lucide:arrow-left" size="20" aria-hidden="true" />
        Voltar aos projetos
      </NuxtLink>

      <div class="mt-8 mb-8">
        <span
          class="inline-block rounded-full bg-primaria/10 px-4 py-1.5 text-sm font-bold tracking-wider text-primaria-escura uppercase"
        >
          {{ projeto.tag }}
        </span>
      </div>

      <h1 class="titulo-display mb-6 text-2xl font-bold text-escuro sm:text-4xl xl:text-5xl">
        {{ projeto.titulo }}
      </h1>

      <ProjetoGaleria :imagens="projeto.imagens" :titulo="projeto.titulo" />

      <div class="mt-10 space-y-4 text-base text-escuro md:text-xl">
        <p v-for="(paragrafo, index) in projeto.conteudo" :key="index">{{ paragrafo }}</p>
      </div>

      <div class="mt-10 flex items-center gap-3">
        <p class="font-bold">Compartilhar:</p>
        <a
          v-for="rede in compartilhar"
          :key="rede.url"
          :href="rede.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="rede.label"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-primaria text-escuro transition-colors duration-300 hover:bg-escuro hover:text-primaria"
        >
          <Icon :name="rede.icone" size="16" />
        </a>
      </div>

      <nav
        v-if="projetoAnterior || proximoProjeto"
        class="mt-16 flex justify-between gap-4 border-t border-cinza pt-8"
        aria-label="Outros projetos"
      >
        <NuxtLink
          v-if="projetoAnterior"
          :to="`/projetos/${projetoAnterior.slug}`"
          class="inline-flex items-center gap-2 text-escuro transition-colors hover:text-primaria"
        >
          <Icon name="lucide:chevron-left" size="20" aria-hidden="true" />
          {{ projetoAnterior.titulo }}
        </NuxtLink>
        <span v-else />
        <NuxtLink
          v-if="proximoProjeto"
          :to="`/projetos/${proximoProjeto.slug}`"
          class="inline-flex items-center gap-2 text-escuro transition-colors hover:text-primaria"
        >
          {{ proximoProjeto.titulo }}
          <Icon name="lucide:chevron-right" size="20" aria-hidden="true" />
        </NuxtLink>
      </nav>
    </div>
  </main>
</template>
