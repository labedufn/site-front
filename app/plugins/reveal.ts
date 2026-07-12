/**
 * Diretiva v-reveal: anima a entrada de um elemento quando ele entra no viewport.
 *
 * O conteúdo é visível por padrão (SSR/no-JS/crawlers); a animação é aplicada
 * apenas no cliente e respeita prefers-reduced-motion.
 *
 * Uso: v-reveal ou v-reveal="{ delay: 200 }"
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!("IntersectionObserver" in window)) return;

      const delay: number = binding.value?.delay ?? 0;
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

      const revelar = () => {
        el.style.opacity = "1";
        el.style.transform = "none";
        observer.disconnect();
        window.removeEventListener("beforeprint", revelar);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) revelar();
        },
        { threshold: 0.15 },
      );
      observer.observe(el);

      // Garante que nada fique oculto na impressão da página
      window.addEventListener("beforeprint", revelar, { once: true });
    },
  });
});
