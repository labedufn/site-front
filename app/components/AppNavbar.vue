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

const rolado = ref(false);
const opacidadeFundo = ref(0);
const secaoAtiva = ref<string | null>(null);
const menuAberto = ref(false);

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
  const aoRolar = () => {
    const posicao = window.scrollY;
    opacidadeFundo.value = Math.min(Math.max((posicao - 64) / 72, 0), 1);

    if (!rolado.value && posicao > 64) rolado.value = true;
    else if (rolado.value && posicao < 24) rolado.value = false;
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
    class="pointer-events-none fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-out"
    :class="rolado && !menuAberto ? 'px-3 pt-3 sm:px-4 md:px-6' : 'px-0 pt-0'"
  >
    <div
      aria-hidden="true"
      class="navbar-fundo pointer-events-none absolute inset-x-3 top-3 mx-auto h-16 max-w-4xl rounded-2xl sm:inset-x-4 md:inset-x-6 md:h-14"
      :class="rolado && !menuAberto && 'navbar-fundo-animado'"
      :style="{ opacity: menuAberto ? 0 : opacidadeFundo }"
    />

    <div
      class="pointer-events-auto mx-auto w-full transition-[max-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      :class="
        rolado && !menuAberto
          ? 'navbar-conteudo-flutuante max-w-4xl'
          : 'max-w-[100vw]'
      "
    >
      <div
        class="relative w-full"
        :class="
          menuAberto
            ? 'bg-transparent shadow-none'
            : rolado
              ? 'bg-transparent shadow-none'
              : !naHome
                ? 'rounded-none bg-escuro-claro/80 backdrop-blur-md shadow-none'
                : 'rounded-none bg-transparent shadow-none'
        "
      >
        <div class="container-site">
          <nav
            class="grid grid-cols-[1fr_auto] items-center transition-[padding] duration-300 md:grid-cols-[1fr_auto_1fr]"
            :class="rolado && !menuAberto ? 'py-3' : 'py-4'"
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
            class="block w-auto transition-[height] duration-300"
            :class="rolado && !menuAberto ? 'h-7' : 'h-8'"
            width="160"
            height="40"
          >
        </NuxtLink>

        <ul
          class="hidden items-center justify-self-center transition-[gap] duration-300 md:flex"
          :class="rolado && !menuAberto ? 'gap-2 lg:gap-3' : 'gap-3 lg:gap-4'"
        >
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
            <Icon :name="rede.icone" :size="rolado && !menuAberto ? 20 : 24" />
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
    </div>
  </header>
</template>
