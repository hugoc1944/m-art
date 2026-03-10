import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  const pathnameIsMissingLocale =
    !pathname.startsWith("/fr") &&
    !pathname.startsWith("/en") &&
    !pathname.startsWith("/es") &&
    !pathname.startsWith("/pt");

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}