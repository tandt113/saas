// plugins/wow.client.ts
import type { DirectiveBinding } from "vue"
import gsap from "gsap"

type WowOptions = {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  once?: boolean
  offset?: number
}

export default defineNuxtPlugin((nuxtApp) => {
  const directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      const opt = (binding.value || {}) as WowOptions

      const from: gsap.TweenVars = { opacity: 0, y: 30, ...opt.from }
      const to: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        ...opt.to
      }

      gsap.set(el, from)

      const offset = opt.offset ?? 0
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(el, to)
              if (opt.once !== false) io.unobserve(el)
            }
          })
        },
        { rootMargin: `0px 0px -${offset}px 0px`, threshold: 0.1 }
      )

      io.observe(el)
      ;(el as any).__wowIO__ = io
    },
    unmounted(el: HTMLElement) {
      ;(el as any).__wowIO__?.disconnect?.()
    }
  }

  // ĐĂNG KÝ directive toàn cục
  nuxtApp.vueApp.directive("wow", directive)
})
