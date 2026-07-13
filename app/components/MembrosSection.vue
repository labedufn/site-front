<script setup lang="ts">
import { membros } from "~/data/membros";
</script>

<template>
  <section id="membros" class="scroll-mt-20">
    <SectionHeader titulo="Membros" classe-fundo="bg-escuro" classe-texto="text-white" />
    <div class="container-site">
      <div class="flex flex-wrap justify-center gap-15 py-16 md:py-24 lg:gap-19">
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
