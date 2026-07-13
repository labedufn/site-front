<script setup lang="ts">
import { membros } from "~/data/membros";
</script>

<template>
  <section id="membros" class="scroll-mt-20 py-20 md:py-28">
    <div class="container-site">
      <SecaoTitulo centralizado kicker="Membros">
        Quem faz o lab <span class="text-primaria">acontecer</span>.
      </SecaoTitulo>
      <div
        class="grid grid-cols-1 justify-items-center gap-x-4 gap-y-8 min-[480px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 xl:grid-cols-5"
      >
        <MembroCard
          v-for="(membro, index) in membros"
          :key="membro.email"
          v-reveal="{ delay: (index % 4) * 100 }"
          :membro="membro"
        />
      </div>
    </div>
  </section>
</template>
