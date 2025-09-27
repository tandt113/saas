export default defineNuxtPlugin({
    name: 'auth-client',
    async setup() {
        // Chỉ chạy trên client
        if (process.server) return

        const user = useState<any | null>('auth:user')
        
        // Nếu SSR đã set user, không cần fetch lại
        if (user.value !== null) return


        try {
            const response = await $fetch<any>('/api/auth/get-user', {
                credentials: 'include'
            })

            if (response?.data?.metadata) {
                user.value = response.data.metadata
            } else {
                user.value = null
            }
        } catch (error) {
            user.value = null
        }
    }
})