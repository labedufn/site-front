<script setup lang="ts">
import { apoiadores } from "~/data/apoiadores";
</script>

<template>
  <section id="apoiadores" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <p
        class="intersect-once intersect:revelar titulo-display mb-12 text-center text-sm font-medium tracking-[0.35em] text-primaria/90 md:text-base"
      >
        Apoiadores
      </p>
      <div>
        <div
          class="overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          role="region"
          aria-label="Logos dos apoiadores"
        >
          <div
            class="esteira flex w-max items-center will-change-transform motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center"
          >
            <img
              v-for="(apoiador, index) in [...apoiadores, ...apoiadores]"
              :key="index"
              :src="apoiador.logo"
              :alt="index < apoiadores.length ? apoiador.nome : ''"
              :aria-hidden="index >= apoiadores.length"
              class="max-h-28 max-w-56 px-12 opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
