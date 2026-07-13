<script setup lang="ts">
import { gsap, movimentoReduzido } from "~/utils/animacao";

const props = defineProps<{ valor: number }>();

const raiz = ref<HTMLElement | null>(null);
const exibido = ref(props.valor);
let contexto: gsap.Context | undefined;

function formatar(n: number) {
  return String(Math.round(n)).padStart(2, "0");
}

onMounted(() => {
  if (movimentoReduzido()) return;
  const el = raiz.value;
  if (!el) return;

  const contador = { atual: 0 };

  contexto = gsap.context(() => {
    gsap.fromTo(
      contador,
      { atual: 0 },
      {
        atual: props.valor,
        duration: 1.4,
        ease: "power3.out",
        onUpdate: () => {
          exibido.value = contador.atual;
        },
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });
});

onUnmounted(() => contexto?.revert());
</script>

<template>
  <span ref="raiz">{{ formatar(exibido) }}</span>
</template>
