// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["app/pages/**/*.vue", "app/error.vue", "app/app.vue"],
  rules: {
    // Páginas e arquivos especiais do Nuxt têm nomes ditados pela convenção de rotas
    "vue/multi-word-component-names": "off",
  },
});
