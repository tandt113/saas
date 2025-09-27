import { H3Event, setCookie } from 'h3'

export default function setTokenCookie(event:H3Event, accessToken: string) {
     setCookie(event, 'accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
    })
}