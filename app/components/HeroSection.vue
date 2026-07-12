<template>
  <section id="inicio" class="relative flex h-svh min-h-125 flex-col items-center justify-center overflow-hidden">
    <!-- Foto de fundo com véu escuro que funde o hero na página -->
    <div class="absolute inset-0 bg-[url(/img/fotos/hero_bg.png)] bg-cover bg-center" aria-hidden="true" />
    <div class="absolute inset-0 bg-escuro/55" aria-hidden="true" />
    <div class="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-escuro" aria-hidden="true" />

    <div class="container-site relative">
      <div v-reveal class="text-center">
        <p class="label-tecnico mb-6">// universidade franciscana — ufn</p>
        <p class="titulo-display mb-4 text-sm font-medium text-white/90 sm:text-2xl md:mb-6 md:text-3xl xl:text-4xl">
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-8 font-extrabold text-white [text-shadow:0_0_40px_rgb(34_181_211/0.35)] text-2xl sm:text-3xl md:text-5xl xl:text-6xl min-[1400px]:text-7xl"
        >
          Eletrônica e Desenvolvimento
        </h1>
        <p class="mx-auto mb-10 max-w-xl text-base text-texto-suave md:text-lg">
          Robótica, eletrônica e programação na prática — um espaço maker aberto à comunidade
          acadêmica.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <BotaoAcao to="/#projetos">Conheça os projetos</BotaoAcao>
          <BotaoAcao secundario to="mailto:labedufn@gmail.com">Fale conosco</BotaoAcao>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <ScrollIndicador class="scale-75 md:scale-90" />
    </div>
  </section>
</template>
