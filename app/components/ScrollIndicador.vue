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
  border: 3px solid white;
  border-radius: 23px;
  transition: border-color 0.3s ease-in-out;
}

.mouse:hover,
.mouse:focus-visible {
  border-color: var(--color-primaria);
}

.mouse-ponto {
  position: absolute;
  animation: mouse-ponto 2.5s infinite;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: white;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
}

@keyframes mouse-ponto {
  0% {
    top: 29%;
    opacity: 1;
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  16% {
    top: 50%;
    opacity: 1;
  }
  50% {
    top: 50%;
    opacity: 0;
  }
  51%,
  100% {
    top: 29%;
    opacity: 0;
  }
}

.mouse:hover .mouse-ponto,
.mouse:focus-visible .mouse-ponto {
  background-color: var(--color-primaria);
}
</style>
