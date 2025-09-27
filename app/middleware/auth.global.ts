// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const user = useState<any | null | undefined>('auth:user')

  const publicPaths = ['/login', '/register', '/forgot-password']
  const isPublicPath = publicPaths.some(p => to.path === p || to.path.startsWith(p + '/'))

  const isLoggedIn = !!user.value

  if (isLoggedIn && isPublicPath) {
    return navigateTo('/')
  }

  if (!isLoggedIn && !isPublicPath) {
    return navigateTo('/login')
  }
})
