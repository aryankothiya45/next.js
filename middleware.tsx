import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const authCookie = request.cookies.get("auth")?.value;
    const {pathname} = request.nextUrl;

    if(pathname === "/login" ){
        return NextResponse.next();
    }

    if(authCookie !== "true" ){
        const loginURL = new URL("/login",request.url);
        return NextResponse.redirect(loginURL);
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|favicon.ico).*)"],
};