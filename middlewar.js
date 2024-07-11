import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request) {
    const session = await getToken({req: request})
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (session == null || session.user.role != 'admin') {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }

    if (request.nextUrl.pathname.startsWith('/login')) {
        if (session) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }

    if (request.nextUrl.pathname.startsWith('/register')) {
        if (session) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }
}