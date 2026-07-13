<template>
  <section class="relative overflow-hidden py-20 md:py-32">
    <!-- Raios convergindo para o convite -->
    <div aria-hidden="true" class="absolute top-1/2 left-0 w-[22vw] -translate-y-1/2 text-primaria/30 max-md:hidden">
      <RaioLinha />
    </div>
    <div
      aria-hidden="true"
      class="absolute top-1/2 right-0 w-[22vw] -translate-y-1/2 scale-x-[-1] text-primaria/30 max-md:hidden"
    >
      <RaioLinha />
    </div>

    <div v-reveal class="container-site flex flex-col items-center text-center">
      <p class="titulo-display mb-4 text-sm font-medium tracking-[0.35em] text-primaria/90 md:text-base">
        Faça parte
      </p>
      <h2
        class="titulo-display mb-6 max-w-3xl text-2xl leading-tight font-bold text-balance text-white sm:text-4xl xl:text-5xl"
      >
        Quer construir com <span class="text-primaria">a gente</span>?
      </h2>
      <p class="mb-10 max-w-xl leading-relaxed text-white/65">
        O LABED é aberto à comunidade acadêmica da UFN. Venha conhecer o espaço, participar de um
        projeto ou trazer uma ideia para a bancada.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <BotaoAcao to="mailto:labedufn@gmail.com">Fale conosco</BotaoAcao>
        <BotaoAcao secundario claro to="https://www.instagram.com/labedufn" target="_blank">
          Siga no Instagram
        </BotaoAcao>
      </div>
    </div>
  </section>
</template>
