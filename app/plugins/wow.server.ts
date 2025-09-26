// app/plugins/wow.server.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('wow', {
    getSSRProps() {
      return {}
    }
  })
})
