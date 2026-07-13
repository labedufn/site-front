<script setup lang="ts">
const props = defineProps<{
  imagens: string[];
  titulo: string;
}>();

const trilho = ref<HTMLElement | null>(null);
const indiceAtual = ref(0);

function irPara(indice: number) {
  const el = trilho.value;
  if (!el) return;
  const total = props.imagens.length;
  const destino = ((indice % total) + total) % total;
  el.scrollTo({ left: destino * el.clientWidth, behavior: "smooth" });
}

function aoRolar() {
  const el = trilho.value;
  if (!el) return;
  indiceAtual.value = Math.round(el.scrollLeft / el.clientWidth);
}
</script>

<template>
  <div class="relative">
    <div
      ref="trilho"
      class="flex snap-x snap-mandatory overflow-x-auto rounded-xl"
      tabindex="0"
      role="region"
      :aria-label="`Galeria de fotos do projeto ${titulo}`"
      @scroll.passive="aoRolar"
    >
      <NuxtImg
        v-for="(imagem, index) in imagens"
        :key="imagem"
        :src="imagem"
        :alt="`Foto ${index + 1} do projeto ${titulo}`"
        class="aspect-3/2 w-full flex-none snap-center object-cover"
        width="800"
        :loading="index === 0 ? 'eager' : 'lazy'"
      />
    </div>

    <template v-if="imagens.length > 1">
      <button
        type="button"
        aria-label="Foto anterior"
        class="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-escuro/60 p-2 text-white transition-colors hover:bg-primaria hover:text-escuro"
        @click="irPara(indiceAtual - 1)"
      >
        <Icon name="lucide:chevron-left" size="28" />
      </button>
      <button
        type="button"
        aria-label="Próxima foto"
        class="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-escuro/60 p-2 text-white transition-colors hover:bg-primaria hover:text-escuro"
        @click="irPara(indiceAtual + 1)"
      >
        <Icon name="lucide:chevron-right" size="28" />
      </button>

      <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          v-for="(_, index) in imagens"
          :key="index"
          type="button"
          :aria-label="`Ir para a foto ${index + 1}`"
          :aria-current="index === indiceAtual"
          class="h-2.5 w-2.5 rounded-full transition-colors"
          :class="index === indiceAtual ? 'bg-primaria' : 'bg-white/60 hover:bg-white'"
          @click="irPara(index)"
        />
      </div>
    </template>
  </div>
</template>
