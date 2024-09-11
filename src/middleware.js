import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/pages/login-to-account' || path === '/pages/register-account';

    const token = request.cookies.get("token")?.value || '';

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/pages/login-to-account', request.url));
    }
}

export const config = {
    matcher: [
        '/pages/login-to-account',
        '/pages/register-account',
        '/pages/user-profile',
    ],
}