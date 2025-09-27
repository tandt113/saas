import { sendRedirect } from 'h3';
import setTokenCookie from '@/composables/useCookies';

export default defineEventHandler(async (event) => {
    const query = getQuery<{ accessToken?: string }>(event)
    const accessToken = query.accessToken || ''
   
    setTokenCookie(event, accessToken)

   return sendRedirect(event, '/')
})