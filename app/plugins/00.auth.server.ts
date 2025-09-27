export default defineNuxtPlugin(async () => {
    // Chỉ chạy trên server
    if (process.client) return

    const user = useState<any | null>('auth:user', () => null)
    
    // Nếu đã có user, không fetch lại
    if (user.value !== null)  return;

    try {
        const headers = useRequestHeaders(['cookie'])
        const response = await $fetch<any>('/api/auth/get-user', {
            headers,
            credentials: 'include'
        })

        if (response?.data?.metadata) {
            user.value = response.data.metadata;
        } else {
            user.value = null;
        }
    } catch (error) {
        user.value = null;
    }
    
})
