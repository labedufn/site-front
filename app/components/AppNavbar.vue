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

const route = useRoute();
const naHome = computed(() => route.path === "/");

const rolado = ref(false);
const secaoAtiva = ref<string | null>(null);
const menuAberto = ref(false);

watch(
  () => route.fullPath,
  () => {
    menuAberto.value = false;
  }
);

watch(menuAberto, (aberto) => {
  if (import.meta.client) document.body.classList.toggle("overflow-hidden", aberto);
});

onMounted(() => {
  const aoRolar = () => {
    rolado.value = window.scrollY > 50;
  };
  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) secaoAtiva.value = entry.target.id;
      }
    },
    { rootMargin: "-30% 0px -50% 0px" }
  );
  for (const secao of secoes) {
    const el = document.getElementById(secao.id);
    if (el) observer.observe(el);
  }

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", aoRolar);
    observer.disconnect();
    document.body.classList.remove("overflow-hidden");
  });
});
</script>

<template>
  <header
    class="fixed z-50 w-full transition-all duration-500"
    :class="
      menuAberto
        ? 'bg-transparent'
        : rolado || !naHome
          ? 'bg-escuro-claro/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
    "
  >
    <div class="container-site">
      <nav class="flex items-center justify-between py-4" aria-label="Principal">
        <NuxtLink to="/#inicio" aria-label="LABED - voltar ao início">
          <img
            src="/img/logos/logo_original.svg"
            alt="LABED"
            class="h-8 w-auto"
            width="160"
            height="40"
          >
        </NuxtLink>

        <ul class="ml-20 hidden items-center gap-8 md:flex">
          <li v-for="secao in secoes" :key="secao.id">
            <NuxtLink
              :to="`/#${secao.id}`"
              class="-m-3 p-3 transition-colors duration-300 hover:text-primaria"
              :class="secaoAtiva === secao.id && naHome ? 'text-primaria' : 'text-white/85'"
            >
              {{ secao.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="hidden flex-1 justify-end gap-4 md:flex">
          <a
            v-for="rede in redesSociais"
            :key="rede.url"
            :href="rede.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="rede.label"
            class="text-white transition-colors duration-300 hover:text-primaria"
          >
            <Icon :name="rede.icone" size="24" />
          </a>
        </div>

        <button
          type="button"
          class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          :aria-expanded="menuAberto"
          aria-controls="menu-mobile"
          :aria-label="menuAberto ? 'Fechar menu' : 'Abrir menu'"
          @click="menuAberto = !menuAberto"
        >
          <span
            class="h-0.5 w-7 rounded-full bg-white transition-transform duration-300"
            :class="menuAberto && 'translate-y-2 rotate-45'"
          />
          <span
            class="h-0.5 w-7 rounded-full bg-white transition-opacity duration-300"
            :class="menuAberto && 'opacity-0'"
          />
          <span
            class="h-0.5 w-7 rounded-full bg-white transition-transform duration-300"
            :class="menuAberto && '-translate-y-2 -rotate-45'"
          />
        </button>

        <Teleport to="body">
          <div
            id="menu-mobile"
            class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-escuro-claro/95 backdrop-blur-lg transition-all duration-500 md:hidden"
            :class="
              menuAberto
                ? 'visible opacity-100 pointer-events-auto'
                : 'invisible opacity-0 pointer-events-none'
            "
            @click.self="menuAberto = false"
          >
            <NuxtLink
              v-for="secao in secoes"
              :key="secao.id"
              :to="`/#${secao.id}`"
              class="text-xl transition-colors duration-300 hover:text-primaria"
              :class="secaoAtiva === secao.id && naHome ? 'text-primaria' : 'text-white'"
              :tabindex="menuAberto ? 0 : -1"
              @click="menuAberto = false"
            >
              {{ secao.label }}
            </NuxtLink>
            <div class="flex gap-6">
              <a
                v-for="rede in redesSociais"
                :key="rede.url"
                :href="rede.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="rede.label"
                :tabindex="menuAberto ? 0 : -1"
                class="text-white transition-colors duration-300 hover:text-primaria"
              >
                <Icon :name="rede.icone" size="28" />
              </a>
            </div>
          </div>
        </Teleport>
      </nav>
    </div>
  </header>
</template>
