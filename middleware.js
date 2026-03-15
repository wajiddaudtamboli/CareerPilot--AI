import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/home',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook(.*)',
  '/careerplanning(.*)',
  '/learn(.*)',
  '/preparation(.*)',
  '/company(.*)',
  '/mock-interview(.*)',
  '/online-ide(.*)',
  '/ai-code-practice(.*)',
  '/doubt-solving(.*)',
  '/focus-mode(.*)',
  '/grammar-check(.*)',
  '/language-learning(.*)',
  '/q-and-a(.*)',
  '/real-interview(.*)',
  '/api/chat(.*)',
  '/api/gemini(.*)',
  '/api/execute-code(.*)',
  '/api/jobs(.*)',
  '/api/pdf(.*)',
  '/api/scrape(.*)',
  '/api/users(.*)',
  '/api/database(.*)',
  '/api/assessment(.*)',
  '/assessment(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isTestPublishableKey =
    typeof publishableKey === 'string' && publishableKey.startsWith('pk_test_');
  const isProduction = process.env.NODE_ENV === 'production';
  const clerkEnabled = Boolean(publishableKey) && !(isProduction && isTestPublishableKey);

  // Always serve favicon.ico from local folder icon (PNG), not .ico
  if (request.nextUrl.pathname === '/favicon.ico') {
    const url = new URL('/favicon-32x32.png?v=3', request.url);
    const res = NextResponse.redirect(url, { status: 308 });
    // Explicitly disable caching to force Chrome to refetch the PNG
    res.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.headers.set('Pragma', 'no-cache');
    res.headers.set('Expires', '0');
    return res;
  }
  // Protect dashboard and other private routes
  if (clerkEnabled && !isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Explicitly include favicon.ico so we can redirect it
    '/favicon.ico',
  ],
};