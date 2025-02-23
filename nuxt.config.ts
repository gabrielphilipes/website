// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  srcDir: "app",
  serverDir: "server",
  css: ["~/assets/css/general.css"],

  // Modules
  googleFonts: {
    families: {
      Newsreader: [200, 300, 400, 500, 600, 700, 800],
    },
  },
});