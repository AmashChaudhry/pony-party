import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/pages/login-to-account' || path === '/pages/register-account' || path === '/pages/forgot-password';

    const isAdminPublicPath = path === '/pages/otp-verification';
    const isAdminPath = path.startsWith('/admin');

    const token = request.cookies.get("token")?.value || '';
    const adminToken = request.cookies.get("adminToken")?.value || '';

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/pages/user-profile', request.url));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/pages/login-to-account', request.url));
    }

    if (isAdminPath || isAdminPublicPath) {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET));
        const isAdmin = payload.isAdmin;

        if (!isAdmin) {
            return NextResponse.redirect(new URL('/pages/user-profile', request.url));
        }

        if (isAdmin && adminToken && isAdminPublicPath) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }

        if (isAdmin && !adminToken && !isAdminPublicPath) {
            return NextResponse.redirect(new URL('/pages/user-profile', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/pages/login-to-account',
        '/pages/register-account',
        '/pages/forgot-password',
        '/pages/user-profile/:path*',
        '/pages/otp-verification',
        '/admin/:path*',
    ],
}