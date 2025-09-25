export default defineNuxtPlugin(async () => {
    const user = useState<any | null>('auth:user', () => null);
    try {
        const headers = useRequestHeaders(['cookie'])
        const response = await $fetch<any>('/api/auth/get-user', {
            headers,
            credentials: 'include'
        })
        if (response.data.metadata) {
            user.value = response.data.metadata;
        } else {
            user.value = null;
        }
    } catch {
        user.value = null;
    }
})
