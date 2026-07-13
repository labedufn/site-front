<script setup lang="ts">
import { projetos } from "~/data/projetos";

const route = useRoute();
const projeto = projetos.find((p) => p.slug === route.params.slug);

if (!projeto) {
  throw createError({ statusCode: 404, statusMessage: "Projeto não encontrado", fatal: true });
}

const siteConfig = useSiteConfig();
const urlProjeto = `${siteConfig.url}/projetos/${projeto.slug}`;
const tituloCompartilhado = `${projeto.titulo} | LABED`;
const mensagem = `${projeto.titulo}\n\n${projeto.descricao}\n\n${urlProjeto}`;

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
    label: "Compartilhar no LinkedIn",
    icone: "fa6-brands:linkedin-in",
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlProjeto)}&title=${encodeURIComponent(tituloCompartilhado)}&summary=${encodeURIComponent(projeto.descricao)}`,
  },
];

const indiceAtual = projetos.indexOf(projeto);
const projetoAnterior = projetos[indiceAtual - 1];
const proximoProjeto = projetos[indiceAtual + 1];

useSeoMeta({
  title: projeto.titulo,
  description: projeto.descricao,
  ogTitle: `${projeto.titulo} | LABED`,
  ogDescription: projeto.descricao,
  ogImage: projeto.thumbnail,
  ogUrl: urlProjeto,
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterTitle: `${projeto.titulo} | LABED`,
  twitterDescription: projeto.descricao,
  twitterImage: projeto.thumbnail,
});
</script>

<template>
  <main v-if="projeto">
    <div class="container-site max-w-250 pt-28 pb-16 md:pt-36 md:pb-24">
      <NuxtLink
        to="/#projetos"
        class="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-primaria"
      >
        <Icon name="lucide:arrow-left" size="20" aria-hidden="true" />
        Voltar aos projetos
      </NuxtLink>

      <p class="mt-10 mb-3 text-sm font-bold tracking-[0.25em] text-primaria uppercase">
        {{ projeto.tag }}
      </p>

      <h1 class="titulo-display mb-8 text-2xl font-bold text-white sm:text-4xl xl:text-5xl">
        {{ projeto.titulo }}
      </h1>

      <ProjetoGaleria :imagens="projeto.imagens" :titulo="projeto.titulo" />

      <div class="mt-10 space-y-5 text-base text-white/70 md:text-lg">
        <p v-for="(paragrafo, index) in projeto.conteudo" :key="index">{{ paragrafo }}</p>
      </div>

      <div class="mt-10 flex items-center gap-3">
        <p class="text-sm font-bold tracking-wider text-white/60 uppercase">Compartilhar</p>
        <a
          v-for="rede in compartilhar"
          :key="rede.url"
          :href="rede.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="rede.label"
          class="flex size-9 items-center justify-center rounded-full border border-escuro-claro text-white/70 transition-colors duration-300 hover:border-primaria hover:text-primaria"
        >
          <Icon :name="rede.icone" size="15" />
        </a>
      </div>

      <nav
        v-if="projetoAnterior || proximoProjeto"
        class="mt-16 flex justify-between gap-4 border-t border-escuro-claro pt-8"
        aria-label="Outros projetos"
      >
        <NuxtLink
          v-if="projetoAnterior"
          :to="`/projetos/${projetoAnterior.slug}`"
          class="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-primaria"
        >
          <Icon name="lucide:chevron-left" size="20" aria-hidden="true" />
          {{ projetoAnterior.titulo }}
        </NuxtLink>
        <span v-else />
        <NuxtLink
          v-if="proximoProjeto"
          :to="`/projetos/${proximoProjeto.slug}`"
          class="inline-flex items-center gap-2 text-right text-white/70 transition-colors hover:text-primaria"
        >
          {{ proximoProjeto.titulo }}
          <Icon name="lucide:chevron-right" size="20" aria-hidden="true" />
        </NuxtLink>
      </nav>
    </div>
  </main>
</template>
