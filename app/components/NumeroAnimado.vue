<script setup lang="ts">
/**
 * Número que sobe em contagem quando entra na tela.
 * Sem JS ou com prefers-reduced-motion, mostra o valor final direto.
 */
const props = defineProps<{ valor: number }>();

const raiz = ref<HTMLElement | null>(null);
const exibido = ref(props.valor);

function formatar(n: number) {
  return String(Math.round(n)).padStart(2, "0");
}

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = raiz.value;
  if (!el || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();

      const duracao = 1200;
      const inicio = performance.now();
      const animar = (agora: number) => {
        const progresso = Math.min((agora - inicio) / duracao, 1);
        // easing de desaceleração
        const suavizado = 1 - Math.pow(1 - progresso, 3);
        exibido.value = props.valor * suavizado;
        if (progresso < 1) requestAnimationFrame(animar);
      };
      exibido.value = 0;
      requestAnimationFrame(animar);
    },
    { threshold: 0.6 },
  );
  observer.observe(el);
});
</script>

<template>
  <span ref="raiz">{{ formatar(exibido) }}</span>
</template>
