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
      class="absolute top-[38%] left-0 w-[30vw] text-primaria/40 max-md:hidden"
    >
      <RaioLinha />
    </div>
    <div
      aria-hidden="true"
      class="absolute right-0 bottom-[26%] w-[30vw] scale-x-[-1] text-primaria/40 max-md:hidden"
    >
      <RaioLinha />
    </div>

    <div class="container-site relative">
      <div v-reveal class="max-w-5xl text-white">
        <p
          class="titulo-display mb-4 text-xs font-medium tracking-[0.3em] text-primaria/90 sm:mb-6 sm:text-sm md:text-base md:tracking-[0.35em]"
        >
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-6 text-2xl leading-[1.15] font-bold text-balance sm:mb-8 sm:text-5xl xl:text-7xl min-[1600px]:text-8xl"
        >
          Eletrônica e<br class="sm:hidden">
          <span class="hidden sm:inline" />Desenvolvimento
        </h1>
        <p
          class="mb-8 max-w-xl text-sm leading-relaxed text-white/70 sm:mb-10 sm:text-base md:text-lg"
        >
          Robótica, eletrônica e programação na prática, um espaço maker da Universidade Franciscana
          aberto à comunidade acadêmica.
        </p>
        <div class="flex flex-wrap items-center gap-3 sm:gap-4">
          <BotaoAcao to="/#projetos">Conheça os projetos</BotaoAcao>
        </div>
      </div>
    </div>

    <div class="absolute bottom-[calc(5.3vw+2.5rem)] left-1/2 -translate-x-1/2 max-md:hidden">
      <ScrollIndicador class="scale-75" />
    </div>

    <div class="absolute bottom-0 w-full">
      <SectionDivisor invertido />
    </div>
  </section>
</template>
