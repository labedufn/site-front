<script setup lang="ts">
const props = defineProps<{ valor: number }>();

const raiz = ref<HTMLElement | null>(null);
const exibido = ref(props.valor);

function formatar(n: number) {
  return String(n).padStart(2, "0");
}

onMounted(() => {
  const el = raiz.value;
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observador = new IntersectionObserver(
    ([entrada]) => {
      if (!entrada?.isIntersecting) return;
      observador.disconnect();

      const duracao = 1400;
      const inicio = performance.now();
      const passo = (agora: number) => {
        const t = Math.min((agora - inicio) / duracao, 1);
        // power3.out
        exibido.value = Math.round(props.valor * (1 - (1 - t) ** 3));
        if (t < 1) requestAnimationFrame(passo);
      };
      exibido.value = 0;
      requestAnimationFrame(passo);
    },
    { rootMargin: "0px 0px -15% 0px" }
  );
  observador.observe(el);

  onBeforeUnmount(() => observador.disconnect());
});
</script>

<template>
  <span ref="raiz">{{ formatar(exibido) }}</span>
</template>
