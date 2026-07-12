<template>
  <section
    id="inicio"
    class="relative flex h-svh min-h-125 flex-col items-center justify-center overflow-hidden bg-[url(/img/fotos/hero_bg.png)] bg-cover bg-center"
  >
    <div class="container-site">
      <div v-reveal class="mb-20 text-center text-white">
        <p
          class="titulo-display mb-4 text-sm font-medium sm:text-2xl md:mb-8 md:text-3xl xl:text-4xl min-[1400px]:text-5xl"
        >
          Laboratório de
        </p>
        <h1
          class="titulo-display mb-10 text-2xl font-extrabold sm:text-3xl md:mb-16 md:text-5xl xl:text-6xl min-[1400px]:text-8xl"
        >
          Eletrônica e Desenvolvimento
        </h1>
        <ScrollIndicador class="scale-75 md:scale-100" />
      </div>
    </div>
    <div class="absolute -bottom-1.5 w-full">
      <SectionDivisor invertido />
    </div>
  </section>
</template>
