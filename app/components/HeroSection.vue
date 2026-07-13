<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";

const secao = ref<HTMLElement | null>(null);
let contexto: gsap.Context | undefined;

onMounted(() => {
  if (movimentoReduzido()) return;
  const raiz = secao.value;
  if (!raiz) return;

  contexto = gsap.context((self) => {
    const palavras = self.selector?.("[data-hero-palavra]") ?? [];

    gsap
      .timeline({ delay: 0.2 })
      .fromTo(
        "[data-hero-kicker]",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "power2.inOut" }
      )
      .from(
        palavras,
        { yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.12 },
        "-=0.55"
      )
      .from(
        "[data-hero-descricao]",
        { opacity: 0, y: 24, duration: 0.8, ease: "power3.out" },
        "-=0.7"
      )
      .from("[data-hero-acoes]", { opacity: 0, y: 18, duration: 0.7, ease: "power3.out" }, "-=0.55")
      .from("[data-hero-indicador]", { opacity: 0, duration: 0.8, ease: "none" }, "-=0.3");

    gsap.to("[data-hero-conteudo]", {
      yPercent: -18,
      opacity: 0,
      ease: "none",
      scrollTrigger: { trigger: raiz, start: "top top", end: "80% top", scrub: true },
    });

    gsap.to("[data-hero-raio]", {
      y: -70,
      ease: "none",
      scrollTrigger: { trigger: raiz, start: "top top", end: "bottom top", scrub: true },
    });
  }, raiz);
});

onUnmounted(() => contexto?.revert());
</script>

<template>
  <section
    id="inicio"
    ref="secao"
    class="relative flex h-svh min-h-150 flex-col justify-center overflow-hidden bg-[url(/img/fotos/hero_bg.png)] bg-cover bg-center bg-local md:bg-fixed"
  >
    <div
      class="absolute inset-0 bg-linear-to-b from-escuro/80 via-escuro/45 to-escuro/90"
      aria-hidden="true"
    />

    <div
      aria-hidden="true"
      data-hero-raio
      class="absolute top-[36%] left-0 w-[22vw] max-w-100 text-primaria/40 mask-[linear-gradient(to_right,black_55%,transparent)] max-md:hidden"
    >
      <RaioLinha />
    </div>
    <div
      aria-hidden="true"
      data-hero-raio
      class="absolute right-0 bottom-[36%] w-[22vw] max-w-100 scale-x-[-1] text-primaria/40 mask-[linear-gradient(to_right,black_55%,transparent)] max-md:hidden"
    >
      <RaioLinha />
    </div>

    <div class="container-site relative">
      <div data-hero-conteudo class="max-w-5xl text-white">
        <p
          data-hero-kicker
          class="titulo-display mb-4 text-xs font-medium tracking-[0.3em] text-primaria/90 sm:mb-6 sm:text-sm md:text-base md:tracking-[0.35em]"
        >
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-6 text-2xl leading-[1.15] font-bold text-balance sm:mb-8 sm:text-5xl xl:text-7xl min-[1600px]:text-8xl"
        >
          <span class="mr-[0.22em] mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span data-hero-palavra class="inline-block will-change-transform">Eletrônica</span>
          </span>
          <span class="mr-[0.22em] mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span data-hero-palavra class="inline-block will-change-transform">e</span>
          </span>
          <br class="sm:hidden">
          <span class="mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span data-hero-palavra class="inline-block will-change-transform">
              Desenvolvimento
            </span>
          </span>
        </h1>
        <p
          data-hero-descricao
          class="mb-8 max-w-xl text-sm leading-relaxed text-white/70 sm:mb-10 sm:text-base md:text-lg"
        >
          Robótica, eletrônica e programação na prática, um espaço maker da Universidade Franciscana
          aberto à comunidade acadêmica.
        </p>
        <div data-hero-acoes class="flex flex-wrap items-center gap-3 sm:gap-4">
          <BotaoAcao to="/#projetos">Conheça os projetos</BotaoAcao>
        </div>
      </div>
    </div>

    <div
      data-hero-indicador
      class="absolute bottom-[calc(5.3vw+2.5rem)] left-1/2 -translate-x-1/2 max-md:hidden"
    >
      <ScrollIndicador class="scale-75" />
    </div>

    <div class="absolute bottom-0 w-full">
      <SectionDivisor invertido />
    </div>
  </section>
</template>
