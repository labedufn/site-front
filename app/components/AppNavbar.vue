<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";

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
const secaoAtiva = ref<string | null>(null);
const menuAberto = ref(false);

const barraProgresso = ref<HTMLElement | null>(null);
const menuMobile = ref<HTMLElement | null>(null);
let contexto: gsap.Context | undefined;

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

  if (aberto && !movimentoReduzido() && menuMobile.value) {
    gsap.from(menuMobile.value.querySelectorAll("[data-menu-item]"), {
      y: 26,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.2,
      clearProps: "opacity,transform",
    });
  }
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

  if (!movimentoReduzido() && barraProgresso.value) {
    contexto = gsap.context(() => {
      gsap.fromTo(
        barraProgresso.value,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: true },
        }
      );
    });
  }

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", aoRolar);
    observer.disconnect();
    contexto?.revert();
    document.body.classList.remove("overflow-hidden");
    $lenis?.start();
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
          ? 'bg-escuro-claro/80 backdrop-blur-md'
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

        <ul class="ml-8 hidden items-center gap-5 md:flex lg:ml-16 lg:gap-7">
          <li v-for="secao in secoes" :key="secao.id">
            <NuxtLink
              :to="`/#${secao.id}`"
              class="group relative -m-2 flex items-baseline p-2 transition-colors duration-300"
              :class="
                secaoAtiva === secao.id && naHome ? 'text-white' : 'text-white/70 hover:text-white'
              "
            >
              <span class="titulo-display text-[0.65rem] font-medium tracking-[0.18em] lg:text-xs">
                {{ secao.label }}
              </span>
              <svg
                viewBox="0 0 400 28"
                preserveAspectRatio="none"
                aria-hidden="true"
                class="absolute inset-x-2 bottom-0 h-1.5 w-[calc(100%-1rem)] text-primaria"
              >
                <path
                  d="M0 14 H150 L172 4 L204 24 L226 14 H400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linejoin="round"
                  class="transition-[stroke-dashoffset] duration-500 ease-out [stroke-dasharray:420] group-hover:[stroke-dashoffset:0]"
                  :class="
                    secaoAtiva === secao.id && naHome
                      ? '[stroke-dashoffset:0]'
                      : '[stroke-dashoffset:420]'
                  "
                />
              </svg>
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
            ref="menuMobile"
            class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-escuro-claro/95 backdrop-blur-lg transition-all duration-500 md:hidden"
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
              data-menu-item
              class="titulo-display text-lg font-medium tracking-[0.15em] transition-colors duration-300 hover:text-primaria"
              :class="secaoAtiva === secao.id && naHome ? 'text-primaria' : 'text-white'"
              :tabindex="menuAberto ? 0 : -1"
              @click="menuAberto = false"
            >
              {{ secao.label }}
            </NuxtLink>
            <div data-menu-item aria-hidden="true" class="w-24 text-primaria/60">
              <RaioLinha />
            </div>
            <div data-menu-item class="flex gap-6">
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

    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0">
      <div
        class="h-px w-full bg-primaria/15 transition-opacity duration-500"
        :class="rolado || !naHome ? 'opacity-100' : 'opacity-0'"
      />
      <div
        ref="barraProgresso"
        class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-primaria-escura to-primaria"
      />
    </div>
  </header>
</template>
