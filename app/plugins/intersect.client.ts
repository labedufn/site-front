import { Observer } from "tailwindcss-intersect";

export default defineNuxtPlugin((nuxtApp) => {
  Observer.start();
  nuxtApp.hook("page:finish", () => Observer.restart());
});
