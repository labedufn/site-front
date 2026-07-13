import type { RouterConfig } from "@nuxt/schema";
import type Lenis from "lenis";

export default {
  scrollBehavior(to, from, savedPosition) {
    if (import.meta.server) return false;

    if (from.matched.length === 0) return false;

    const nuxtApp = useNuxtApp();

    const rolar = () => {
      const lenis = nuxtApp.$lenis as Lenis | undefined;
      lenis?.resize();
      if (to.hash) {
        if (lenis) {
          lenis.scrollTo(to.hash);
        } else {
          document.querySelector(to.hash)?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
      if (savedPosition) {
        if (lenis) lenis.scrollTo(savedPosition.top, { immediate: true });
        else window.scrollTo(savedPosition.left, savedPosition.top);
        return;
      }
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    };

    if (to.path === from.path) {
      rolar();
      return false;
    }

    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce("page:finish", () => {
        setTimeout(rolar, 50);
        resolve(false);
      });
    });
  },
} satisfies RouterConfig;
