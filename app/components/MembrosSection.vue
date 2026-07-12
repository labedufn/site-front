<script setup lang="ts">
import { membros } from "~/data/membros";
</script>

<template>
  <section id="membros" class="scroll-mt-20 py-16 md:py-24">
    <div class="container-site">
      <SectionTitle centralizado kicker="membros" titulo="Membros" />
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <MembroCard
          v-for="(membro, index) in membros"
          :key="membro.email"
          v-reveal="{ delay: (index % 4) * 100 }"
          :membro="membro"
        />
      </div>
    </div>
    <CircuitTrace />
  </section>
</template>
