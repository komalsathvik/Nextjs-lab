import { NextResponse } from "next/server";

export const config = {
  matcher: ["/middleware"],
};

export function middleware(request) {
  console.log("middleware triggered");
  if (request.nextUrl.pathname === "/middleware") {
    return NextResponse.redirect(new URL("/middleware-route", request.url));
  }
  return NextResponse.next();
}
