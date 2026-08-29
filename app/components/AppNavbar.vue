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
const { $lenis } = useNuxtApp();

const encolher = ref(0);
const fundo = ref(0);
const desgrudar = ref(0);
const secaoAtiva = ref<string | null>(null);
const menuAberto = ref(false);

const estilo = computed(() => ({
  "--nav-encolher": menuAberto.value ? 0 : encolher.value,
  "--nav-fundo": menuAberto.value ? 0 : fundo.value,
  "--nav-desgrudar": menuAberto.value ? 0 : desgrudar.value,
}));

watch(
  () => route.fullPath,
  () => {
    menuAberto.value = false;
  }
);

watch(menuAberto, (aberto) => {
  if (!import.meta.client) return;
  document.body.classList.toggle("overflow-hidden", aberto);
  if (aberto) $lenis?.stop();
  else $lenis?.start();
});

onMounted(() => {
  const limitar = (valor: number) => Math.min(Math.max(valor, 0), 1);

  const aoRolar = () => {
    encolher.value = limitar(window.scrollY / 120);
    fundo.value = limitar((window.scrollY - 120) / 80);
    desgrudar.value = limitar((window.scrollY - 200) / 120);
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
    $lenis?.start();
  });
});
</script>

<template>
  <header
    class="navbar-cabecalho pointer-events-none fixed inset-x-0 top-0 z-50"
    :style="estilo"
  >
    <div
      class="navbar-barra pointer-events-auto relative mx-auto w-full"
      :class="!naHome && 'navbar-barra-opaca'"
    >
      <div class="container-site">
        <nav
          class="navbar-nav grid grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]"
          aria-label="Principal"
        >
          <NuxtLink
            to="/#inicio"
            aria-label="LABED - voltar ao início"
            class="flex items-center justify-self-start"
          >
            <img
              src="/img/logos/logo_original.svg"
              alt="LABED"
              class="navbar-logo block w-auto"
              width="160"
              height="40"
            >
          </NuxtLink>

          <ul class="navbar-links hidden items-center justify-self-center md:flex">
            <li v-for="secao in secoes" :key="secao.id">
              <NuxtLink
                :to="`/#${secao.id}`"
                class="group relative flex h-8 items-center px-1.5 leading-none transition-colors duration-300"
                :class="
                  secaoAtiva === secao.id && naHome ? 'text-white' : 'text-white/70 hover:text-white'
                "
              >
                <span class="titulo-display text-[0.65rem] font-medium tracking-[0.18em] lg:text-xs">
                  {{ secao.label }}
                </span>
                <span
                  aria-hidden="true"
                  class="absolute inset-x-1.5 bottom-0 h-px origin-center bg-primaria transition-transform duration-300 group-hover:scale-x-100"
                  :class="secaoAtiva === secao.id && naHome ? 'scale-x-100' : 'scale-x-0'"
                />
              </NuxtLink>
            </li>
          </ul>

          <div class="hidden items-center justify-self-end gap-2 md:flex">
            <a
              v-for="rede in redesSociais"
              :key="rede.url"
              :href="rede.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="rede.label"
              class="flex size-8 items-center justify-center text-white transition-colors duration-300 hover:text-primaria"
            >
              <Icon :name="rede.icone" size="22" />
            </a>
          </div>

          <button
            type="button"
            class="relative z-50 flex h-10 w-10 flex-col items-center justify-center justify-self-end gap-1.5 md:hidden"
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
              class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-escuro-claro/95 backdrop-blur-lg transition-all duration-500 md:hidden"
              :class="
                menuAberto
                  ? 'visible opacity-100 pointer-events-auto'
                  : 'invisible opacity-0 pointer-events-none'
              "
              @click.self="menuAberto = false"
            >
              <NuxtLink
                v-for="(secao, index) in secoes"
                :key="secao.id"
                :to="`/#${secao.id}`"
                :style="{ '--motion-delay': `${200 + index * 60}ms` }"
                class="titulo-display text-lg font-medium tracking-[0.15em] transition-colors duration-300 hover:text-primaria"
                :class="[
                  secaoAtiva === secao.id && naHome ? 'text-primaria' : 'text-white',
                  menuAberto && 'revelar motion-duration-500',
                ]"
                :tabindex="menuAberto ? 0 : -1"
                @click="menuAberto = false"
              >
                {{ secao.label }}
              </NuxtLink>
              <div
                class="flex gap-6"
                :class="menuAberto && 'revelar motion-duration-500'"
                :style="{ '--motion-delay': `${260 + secoes.length * 60}ms` }"
              >
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
    </div>
  </header>
</template>
