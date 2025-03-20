// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ["@nuxtjs/google-fonts", "@nuxt/icon", "@nuxt/ui", "@nuxtjs/seo"],
  srcDir: "app",
  serverDir: "server",
  css: ["~/assets/css/general.css"],

  // Modules
  googleFonts: {
    families: {
      Newsreader: [200, 300, 400, 500, 600, 700, 800],
      "Nunito+Sans": [200, 300, 400, 500, 600, 700, 800],
    },
  },

  site: {
    url: "https://www.philipe.dev",
    name: "Gabriel Philipe Silva",
    description: "Empreendedor, Tech Lead e Desenvolvedor Full Stack",
    defaultLocale: "pt-BR",
    favicon: "/favicon.ico",
    indexable: true,
  },

  schemaOrg: {
    identity: "Person",
  },

  seo: {
    meta: {
      description: "Empreendedor, Tech Lead e Desenvolvedor Full Stack",
      author: "Gabriel Philipe Silva",
      themeColor: [
        { content: "#18181b", media: "(prefers-color-scheme: dark)" },
        { content: "#18181b", media: "(prefers-color-scheme: light)" },
      ],
    },
  },

  sitemap: {
    exclude: ["/admin/**"],
  },
});
