// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  pinia: {
    storesDirs: ['./stores/**'], // auto import các store
  },

  i18n: {
    // nạp file theo thư mục
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
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // Auto import configuration
  imports: {
    autoImport: true,
    global: true,
    dirs: [
      'composables',
      'utils'
    ]
  },

  // Components auto import
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // TypeScript configuration
  typescript: {
    typeCheck: true,
    strict: true
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    esbuild: {
      options: {
        target: 'es2022'
      }
    },
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  runtimeConfig: {
    apiBase: process.env.API_MAIN,
  }
})
