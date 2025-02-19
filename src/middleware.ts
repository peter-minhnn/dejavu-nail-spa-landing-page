import { routing } from '@/shared/i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  return handleI18nRouting(req);
}

export const config = {
  matcher: [
    '/(vi|en)/:path*',
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};
