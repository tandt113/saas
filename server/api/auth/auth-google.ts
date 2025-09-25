import { sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
    const query = getQuery<{ accessToken?: string }>(event)
    const accessToken = query.accessToken || ''
    setCookie(event, 'accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
    })

   return sendRedirect(event, '/')
})