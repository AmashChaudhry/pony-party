import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/pages/login-to-account' || path === '/pages/register-account';
    const isAdminPath = path.startsWith('/admin');

    const token = request.cookies.get("token")?.value || '';

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (isAdminPath) {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET));
        const isAdmin = payload.isAdmin;

        if (!isAdmin) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
}

export const config = {
    matcher: [
        '/pages/login-to-account',
        '/pages/register-account',
        '/pages/user-profile',
        '/admin/:path*',
    ],
}