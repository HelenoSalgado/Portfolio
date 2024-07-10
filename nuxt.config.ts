import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    output: {
      publicDir: 'dist',
    },
    baseURL: process.env.NUXT_APP_BASE_URL,
    minify: true,
    prerender: {
      crawlLinks: true,
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
        { name: 'theme-color', content: '#14171a'}
      ],
      link: [
        { rel: 'icon', href: '/hsl-logo.ico', type:'image/x-icon' }
      ]
    }
  },

  $development: {
    devtools: { enabled: false },
    css: ['assets/css/main.css']
  },

  $production: {
    app: {
      head: {
        link: [
          { rel: 'stylesheet', href: '/css/main.min.css', type: 'text/css' }
        ]
      }
    }
  },

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
  modules: ['@nuxt/image'],

  compatibilityDate: '2024-07-09'
})