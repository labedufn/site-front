<script setup lang="ts">
import { membros } from "~/data/membros";
</script>

<template>
  <section id="membros" class="scroll-mt-20 py-16 md:py-24">
    <div class="container-site">
      <SecaoTitulo centralizado kicker="Membros">
        Quem faz o lab <span class="text-primaria">acontecer</span>.
      </SecaoTitulo>
      <div class="flex flex-wrap justify-center gap-15 lg:gap-19">
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
