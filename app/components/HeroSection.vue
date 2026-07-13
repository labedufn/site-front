<template>
  <section
    id="inicio"
    class="relative flex h-svh min-h-150 flex-col justify-center overflow-hidden bg-[url(/img/fotos/hero_bg.png)] bg-fixed bg-cover bg-center"
  >
    <!-- Véu escuro para leitura e clima -->
    <div class="absolute inset-0 bg-escuro/60" aria-hidden="true"/>

    <!-- Raios cruzando a composição, a partir das bordas da tela -->
    <div
      aria-hidden="true"
      class="absolute top-[38%] left-0 w-[34vw] text-primaria max-md:hidden"
    >
      <RaioLinha />
    </div>
    <div
      aria-hidden="true"
      class="absolute right-0 bottom-[26%] w-[26vw] text-primaria/70 max-md:hidden"
    >
      <RaioLinha />
    </div>

    <div class="container-site relative">
      <div v-reveal class="max-w-5xl text-white">
        <p class="titulo-display mb-6 text-sm font-medium tracking-[0.35em] text-primaria md:text-lg">
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-8 text-3xl leading-[1.15] font-extrabold text-balance sm:text-5xl xl:text-7xl min-[1600px]:text-8xl"
        >
          Eletrônica e<br >
          Desenvolvimento
        </h1>
        <p class="mb-10 max-w-xl text-base text-white/80 md:text-lg">
          Robótica, eletrônica e programação na prática, um espaço maker da Universidade Franciscana
          aberto à comunidade acadêmica.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <BotaoAcao to="/#projetos">Conheça os projetos</BotaoAcao>
          <BotaoAcao secundario claro to="mailto:labedufn@gmail.com">Fale conosco</BotaoAcao>
        </div>
      </div>
    </div>

    <!-- Acima do raio da base, que é mais alto em telas largas (5.3vw) -->
    <div class="absolute bottom-[calc(5.3vw+2.5rem)] left-1/2 -translate-x-1/2 max-md:hidden">
      <ScrollIndicador class="scale-75" />
    </div>

    <div class="absolute -bottom-1.5 w-full">
      <SectionDivisor invertido />
    </div>
  </section>
</template>
