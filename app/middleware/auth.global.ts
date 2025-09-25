// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const user = useState<any | null>('auth:user', () => null);
    const publicPaths = ['/login', '/register', '/forgot-password']

    if (publicPaths.includes(to.path)) return
    if (!user.value) return navigateTo('/login')
})
