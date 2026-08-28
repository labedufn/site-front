<template>
  <section
    id="inicio"
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
          class="limpar motion-delay-[200ms] titulo-display mb-4 text-xs font-medium tracking-[0.3em] text-primaria/90 sm:mb-6 sm:text-sm md:text-base md:tracking-[0.35em]"
        >
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-6 text-2xl leading-[1.15] font-bold text-balance sm:mb-8 sm:text-5xl xl:text-7xl min-[1600px]:text-8xl"
        >
          <span class="mr-[0.22em] mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span
              class="motion-translate-y-in-[115%] motion-duration-[1100ms] motion-ease-out-quart motion-delay-[550ms] inline-block will-change-transform"
            >Eletrônica</span>
          </span>
          <span class="mr-[0.22em] mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span
              class="motion-translate-y-in-[115%] motion-duration-[1100ms] motion-ease-out-quart motion-delay-[670ms] inline-block will-change-transform"
            >e</span>
          </span>
          <br class="sm:hidden">
          <span class="mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <span
              class="motion-translate-y-in-[115%] motion-duration-[1100ms] motion-ease-out-quart motion-delay-[790ms] inline-block will-change-transform"
            >
              Desenvolvimento
            </span>
          </span>
        </h1>
        <p
          class="motion-translate-y-in-[24px] motion-opacity-in-0 motion-duration-[800ms] motion-ease-out-quart motion-delay-[950ms] mb-8 max-w-xl text-sm leading-relaxed text-white/70 sm:mb-10 sm:text-base md:text-lg"
        >
          Robótica, eletrônica e programação na prática, um espaço maker da Universidade Franciscana
          aberto à comunidade acadêmica.
        </p>
        <div
          class="motion-translate-y-in-[18px] motion-opacity-in-0 motion-duration-[700ms] motion-ease-out-quart motion-delay-[1200ms] flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <BotaoAcao to="/#projetos">Conheça os projetos</BotaoAcao>
        </div>
      </div>
    </div>

    <div
      class="motion-opacity-in-0 motion-duration-[800ms] motion-delay-[1600ms] motion-ease-[linear] absolute bottom-[calc(5.3vw+2.5rem)] left-1/2 -translate-x-1/2 max-md:hidden"
    >
      <ScrollIndicador class="scale-75" />
    </div>

    <div class="absolute bottom-0 w-full">
      <SectionDivisor invertido />
    </div>
  </section>
</template>
