import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  //ssr: false,
  nitro: {
    output: {
      publicDir: 'dist',
    },
    baseURL: process.env.NUXT_APP_BASE_URL,
    minify: true,
    prerender: {
      failOnError: false
    }
  },
  experimental: {
    renderJsonPayloads: false,
    payloadExtraction: true
  },
  telemetry: false,
  runtimeConfig: {
    public: {
      site: {
        defaultLocale: 'pt-BR',
        url: process.env.BASE_URL
      },
    }
  },
  app: {
    //baseURL: process.env.BASE_URL,
    buildAssetsDir: 'nuxt',
    head: {
      base: {
        href: process.env.BASE_URL
      },
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#14171a'},
        { name: 'author', content: 'Heleno Salgado' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/css/main.min.css',
          type: 'text/css'
        }
      ]
    }
  },
  //css: ['assets/css/main.css'],
  modules: ['@nuxt/image'],
  // image: {
  //   format: ['webp'],
  //   // The screen sizes predefined by `@nuxt/image`:
  //   screens: {
  //     'xs': 320,
  //     'sm': 640,
  //     'md': 768,
  //     'lg': 1024,
  //     'xl': 1280,
  //     'xxl': 1536,
  //     '2xl': 1536
  //   },
  // }
})
