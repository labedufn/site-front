<script setup lang="ts">
const secoes = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "membros", label: "Membros" },
  { id: "apoiadores", label: "Apoiadores" },
];

const redesSociais = [
  { url: "https://www.instagram.com/labedufn", icone: "fa6-brands:instagram", label: "Instagram" },
  { url: "https://github.com/labedufn", icone: "fa6-brands:github", label: "GitHub" },
];

const anoAtual = new Date().getFullYear();
</script>

<template>
  <footer class="bg-primaria text-escuro">
    <SectionDivisor classe-fill="fill-escuro" />
    <div class="container-site">
      <div
        class="grid grid-cols-1 gap-8 border-b border-escuro/15 py-12 sm:grid-cols-2 sm:gap-10 sm:py-15 md:grid-cols-4"
      >
        <div v-reveal class="flex flex-col items-center md:items-start">
          <NuxtLink to="/#inicio" aria-label="LABED - voltar ao início" class="inline-block">
            <img src="/img/logos/logo_original.svg" alt="LABED" width="160" height="64">
          </NuxtLink>
          <div class="mt-6 flex gap-4 sm:hidden">
            <a
              v-for="rede in redesSociais"
              :key="rede.url"
              :href="rede.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="rede.label"
              class="text-escuro/70 transition-colors duration-300 hover:text-escuro"
            >
              <Icon :name="rede.icone" size="28" />
            </a>
          </div>
        </div>

        <nav v-reveal="{ delay: 100 }" aria-label="Seções do site">
          <h3 class="titulo-display mb-5 text-lg font-bold sm:text-xl">LABED</h3>
          <ul class="flex flex-col gap-3 text-sm sm:text-base">
            <li v-for="secao in secoes" :key="secao.id">
              <NuxtLink
                :to="`/#${secao.id}`"
                class="text-escuro/70 transition-colors duration-300 hover:text-escuro"
              >
                {{ secao.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div v-reveal="{ delay: 200 }">
          <h3 class="titulo-display mb-5 text-lg font-bold sm:text-xl">Contato</h3>
          <div class="flex flex-col gap-3 text-sm sm:text-base">
            <a
              href="mailto:labedufn@gmail.com"
              class="flex items-center gap-3 text-escuro/70 transition-colors duration-300 hover:text-escuro"
            >
              <Icon name="lucide:mail" size="20" class="shrink-0" aria-hidden="true" />
              labedufn@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/S8dV92rKibENyxCe8"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-3 text-escuro/70 transition-colors duration-300 hover:text-escuro"
            >
              <Icon name="lucide:map-pin" size="20" class="mt-0.5 shrink-0" aria-hidden="true" />
              <span class="leading-relaxed">
                Rua dos Andradas, 1614 - Centro, Universidade Franciscana - Conjunto I, Prédio 3,
                Lab. 109, Santa Maria - RS, 97010-030
              </span>
            </a>
          </div>
        </div>

        <div v-reveal="{ delay: 300 }" class="hidden sm:block">
          <h3 class="titulo-display mb-5 text-lg font-bold sm:text-xl">Redes Sociais</h3>
          <div class="flex gap-4">
            <a
              v-for="rede in redesSociais"
              :key="rede.url"
              :href="rede.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="rede.label"
              class="text-escuro/70 transition-colors duration-300 hover:text-escuro"
            >
              <Icon :name="rede.icone" size="32" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center gap-3 py-8 text-center text-sm sm:flex-row sm:justify-between sm:text-left"
      >
        <p class="text-escuro/70">
          &copy; {{ anoAtual }} LABED - Laboratório de Eletrônica e Desenvolvimento.
        </p>
        <a
          href="https://overclocklabz.com"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-opacity duration-300 hover:opacity-80"
          aria-label="OCLZ"
        >
          <img
            src="/img/apoiadores/logo_oclz_preto.svg"
            alt="OCLZ"
            class="h-7 w-auto"
            width="80"
            height="20"
          >
        </a>
      </div>
    </div>
  </footer>
</template>
