<template>
  <a href="#sobre" aria-label="Rolar para a seção Sobre" class="mouse group">
    <span class="mouse-ponto" />
  </a>
</template>

<style scoped>
.mouse {
  position: relative;
  display: block;
  width: 35px;
  height: 55px;
  margin-inline: auto;
  border: 2px solid rgb(255 255 255 / 0.5);
  border-radius: 23px;
  transition: border-color 0.3s ease-in-out;
}

.mouse:hover,
.mouse:focus-visible {
  border-color: var(--color-primaria);
}

.mouse-ponto {
  position: absolute;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: white;
  border-radius: 50%;
  animation: ani-mouse 2.5s linear infinite;
  transition: background-color 0.3s ease-in-out;
}

.mouse:hover .mouse-ponto,
.mouse:focus-visible .mouse-ponto {
  background-color: var(--color-primaria);
}

@keyframes ani-mouse {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mouse-ponto {
    animation: none;
  }
}
</style>
