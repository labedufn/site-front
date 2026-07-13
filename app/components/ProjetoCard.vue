<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";
import type { Projeto } from "~/data/projetos";

const props = defineProps<{
  projeto: Projeto;
  indice?: number;
  invertido?: boolean;
  compacto?: boolean;
}>();

const cartao = ref<HTMLElement | null>(null);
let contexto: gsap.Context | undefined;

onMounted(() => {
  if (movimentoReduzido()) return;
  const raiz = cartao.value;
  if (!raiz) return;

  contexto = gsap.context(() => {
    const moldura = raiz.querySelector("[data-cartao-moldura]");
    const imagem = raiz.querySelector("[data-cartao-imagem]");
    const indiceEl = raiz.querySelector("[data-cartao-indice]");
    const textos = raiz.querySelectorAll("[data-cartao-texto]");

    const tl = gsap.timeline({
      scrollTrigger: { trigger: raiz, start: "top 82%", once: true },
    });

    tl.fromTo(
      moldura,
      { clipPath: props.invertido ? "inset(0 0% 0 100%)" : "inset(0 100% 0 0%)" },
      {
        clipPath: "inset(0 0% 0 0%)",
        duration: 1,
        ease: "power4.inOut",
        clearProps: "clipPath",
      }
    ).from(imagem, { scale: 1.25, duration: 1.4, ease: "power3.out", clearProps: "transform" }, "<");

    if (indiceEl) {
      tl.from(
        indiceEl,
        { opacity: 0, x: props.invertido ? 48 : -48, duration: 0.8, ease: "power3.out" },
        "-=1.1"
      );
    }

    tl.from(
      textos,
      {
        opacity: 0,
        y: 26,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.09,
        clearProps: "opacity,transform",
      },
      "-=1"
    );
  }, raiz);
});

onUnmounted(() => contexto?.revert());
</script>

<template>
  <NuxtLink
    v-if="compacto"
    :to="`/projetos/${projeto.slug}`"
    class="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article ref="cartao" class="flex h-full flex-col">
      <div data-cartao-moldura class="overflow-hidden rounded-2xl">
        <NuxtImg
          data-cartao-imagem
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          width="480"
          height="270"
          loading="lazy"
        />
      </div>
      <div class="flex flex-1 flex-col pt-6">
        <p
          data-cartao-texto
          class="mb-2 text-xs font-medium tracking-[0.3em] text-primaria/90 uppercase"
        >
          {{ projeto.tag }}
        </p>
        <h3 data-cartao-texto class="titulo-display mb-3 text-lg leading-snug font-bold text-white">
          {{ projeto.titulo }}
        </h3>
        <p data-cartao-texto class="mb-5 flex-1 text-sm leading-relaxed text-white/60">
          {{ projeto.descricao }}
        </p>
        <span data-cartao-texto class="inline-flex items-center gap-2 text-sm font-bold text-primaria">
          Ver projeto
          <Icon
            name="lucide:arrow-right"
            size="16"
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  </NuxtLink>

  <NuxtLink
    v-else
    :to="`/projetos/${projeto.slug}`"
    class="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaria"
  >
    <article ref="cartao" class="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        data-cartao-moldura
        class="overflow-hidden rounded-2xl lg:col-span-7"
        :class="invertido && 'lg:order-2'"
      >
        <NuxtImg
          data-cartao-imagem
          :src="projeto.thumbnail"
          :alt="`Foto do projeto ${projeto.titulo}`"
          class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          width="820"
          height="461"
          loading="lazy"
        />
      </div>
      <div class="relative lg:col-span-5">
        <span
          v-if="indice"
          data-cartao-indice
          aria-hidden="true"
          class="titulo-display pointer-events-none absolute -top-14 -left-2 text-8xl font-bold text-transparent select-none [-webkit-text-stroke:1px_rgb(34_181_211/0.3)] md:-top-20 md:text-9xl"
        >
          {{ String(indice).padStart(2, "0") }}
        </span>
        <p
          data-cartao-texto
          class="mb-3 text-xs font-medium tracking-[0.3em] text-primaria/90 uppercase"
        >
          {{ projeto.tag }}
        </p>
        <h3
          data-cartao-texto
          class="titulo-display mb-4 text-xl leading-snug font-bold text-white md:text-3xl"
        >
          {{ projeto.titulo }}
        </h3>
        <p data-cartao-texto class="mb-6 leading-relaxed text-white/60">{{ projeto.descricao }}</p>
        <span data-cartao-texto class="inline-flex items-center gap-2 text-sm font-bold text-primaria">
          Ver projeto
          <Icon
            name="lucide:arrow-right"
            size="16"
            class="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  </NuxtLink>
</template>
