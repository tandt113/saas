// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  experimental: {
    payloadExtraction: false,
    typedPages: true
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'vi', iso: 'vi-VN', file: 'vi.json', name: 'Tiếng Việt' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
    vueI18n: './i18n.config.ts',
  },

  devtools: { 
    enabled: process.env.NODE_ENV === 'development'
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    typeCheck: false
  },

  nitro: {
    experimental: {
      wasm: true
    }
  },

  eslint: {
    checker: false
  },

  compatibilityDate: '2024-07-11',

  runtimeConfig: {
    apiBase: process.env.API_MAIN,
  }
})
