import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('authToken'); // Simulate auth check
  const userRole = req.cookies.get('userRole'); // Simulate role check
  const url = req.nextUrl;

  // If not logged in, redirect to login page
  if (!token && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If not an admin, block access to /admin
  if (url.pathname.startsWith('/admin') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/not-authorized', req.url));
  }

  return NextResponse.next(); // Continue to the page if no restrictions
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'], // Middleware runs only for these paths
};
