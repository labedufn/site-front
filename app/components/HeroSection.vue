<template>
  <section
    id="inicio"
    class="relative flex h-svh min-h-125 flex-col items-center justify-center overflow-hidden bg-[url(/img/fotos/hero_bg.png)] bg-fixed bg-cover bg-center"
  >
    <div class="container-site">
      <div v-reveal class="mb-20 text-center text-white">
        <p
          class="titulo-display mb-4 text-sm font-medium sm:text-2xl md:mb-8 md:text-3xl xl:text-4xl min-[1400px]:text-5xl"
        >
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-6 text-2xl font-extrabold sm:text-3xl md:mb-8 md:text-5xl xl:text-6xl min-[1400px]:text-8xl"
        >
          Eletrônica e Desenvolvimento
        </h1>
        <p class="mx-auto mb-10 max-w-xl text-base text-white/80 md:text-lg">
          Robótica, eletrônica e programação na prática, um espaço maker da Universidade
          Franciscana aberto à comunidade acadêmica.
        </p>
        <div class="mb-12 flex flex-wrap items-center justify-center gap-4">
          <BotaoAcao to="/#projetos">Conheça os projetos</BotaoAcao>
          <BotaoAcao secundario claro to="mailto:labedufn@gmail.com">Fale conosco</BotaoAcao>
        </div>
        <ScrollIndicador class="scale-75 md:scale-90" />
      </div>
    </div>
    <div class="absolute -bottom-1.5 w-full">
      <SectionDivisor invertido />
    </div>
  </section>
</template>
