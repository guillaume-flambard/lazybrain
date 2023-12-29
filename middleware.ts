import { authMiddleware } from "@clerk/nextjs";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

export const middleware = (req: NextRequest) => {
    const cookie = (req.cookies as any)["auth"];
  
    if (!cookie) {
      return NextResponse.redirect("/login");
    }
  };
 