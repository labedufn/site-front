import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-07-01",

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/seo"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: "pt-BR" },
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },

  site: {
    url: "https://labedufn.vercel.app",
    name: "LABED - Laboratório de Eletrônica e Desenvolvimento",
    description:
      "Laboratório de Eletrônica e Desenvolvimento da Universidade Franciscana: robótica, programação e eletrônica na prática.",
    defaultLocale: "pt-BR",
  },

  routeRules: {
    "/**": { prerender: true },
  },

  icon: {
    serverBundle: { collections: ["fa6-brands", "lucide"] },
  },

  fonts: {
    families: [
      { name: "Orbitron", provider: "google", weights: [500, 700, 800] },
      { name: "Roboto", provider: "google", weights: [400, 700] },
    ],
  },
});
