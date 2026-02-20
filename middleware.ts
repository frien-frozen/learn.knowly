import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

    // Skip API routes, static files, and Next.js internals
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // If ?lang= is already present, do nothing
    if (searchParams.has('lang')) {
        return NextResponse.next();
    }

    // Otherwise redirect to the same path with ?lang=en appended
    const url = request.nextUrl.clone();
    url.searchParams.set('lang', 'en');
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!_next|api|favicon|.*\\..*).*)'],
};
