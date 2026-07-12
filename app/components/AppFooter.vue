<script setup lang="ts">
const secoes = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "membros", label: "Membros" },
  { id: "apoiadores", label: "Apoiadores" },
];

const anoAtual = new Date().getFullYear();
</script>

<template>
  <footer class="bg-escuro text-white">
    <div class="container-site">
      <div class="grid grid-cols-1 gap-10 border-b border-escuro-claro pt-15 pb-15 md:grid-cols-4">
        <div v-reveal class="max-md:text-center">
          <NuxtLink to="/#inicio" aria-label="LABED - voltar ao início" class="inline-block">
            <img src="/img/logos/logo_original.svg" alt="LABED" width="160" height="64" >
          </NuxtLink>
        </div>

        <nav v-reveal="{ delay: 100 }" aria-label="Seções do site">
          <h3 class="label-tecnico mb-6 uppercase">LABED</h3>
          <ul class="flex flex-col gap-4">
            <li v-for="secao in secoes" :key="secao.id">
              <NuxtLink
                :to="`/#${secao.id}`"
                class="transition-colors duration-300 hover:text-primaria"
              >
                {{ secao.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div v-reveal="{ delay: 200 }">
          <h3 class="label-tecnico mb-6 uppercase">Contato</h3>
          <div class="flex flex-col gap-4">
            <a
              href="mailto:labedufn@gmail.com"
              class="flex items-center gap-3 transition-colors duration-300 hover:text-primaria"
            >
              <Icon name="lucide:mail" size="24" class="shrink-0" aria-hidden="true" />
              labedufn@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/S8dV92rKibENyxCe8"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-3 transition-colors duration-300 hover:text-primaria"
            >
              <Icon name="lucide:map-pin" size="24" class="mt-1 shrink-0" aria-hidden="true" />
              <span>
                Rua dos Andradas, 1614 - Centro, Universidade Franciscana - Conjunto I, Prédio 3,
                Lab. 109, Santa Maria - RS, 97010-030
              </span>
            </a>
          </div>
        </div>

        <div v-reveal="{ delay: 300 }">
          <h3 class="label-tecnico mb-6 uppercase">Redes Sociais</h3>
          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/labedufn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do LABED"
              class="transition-colors duration-300 hover:text-primaria"
            >
              <Icon name="fa6-brands:instagram" size="32" />
            </a>
            <a
              href="https://github.com/labedufn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub do LABED"
              class="transition-colors duration-300 hover:text-primaria"
            >
              <Icon name="fa6-brands:github" size="32" />
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-between gap-4 py-10 text-sm">
        <p>&copy; {{ anoAtual }} LABED - Laboratório de Eletrônica e Desenvolvimento.</p>
        <p>
          Desenvolvido por
          <a
            href="https://mauricioprb.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold transition-colors duration-300 hover:text-primaria"
          >
            @mauricioprb
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
