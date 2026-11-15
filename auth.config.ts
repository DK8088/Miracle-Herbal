import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 8,
  },

  providers: [],

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      return session;
    },

    authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;

      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.role === "admin";

      if (pathname === "/admin/login" && isAdmin) {
        return Response.redirect(new URL("/admin", request.nextUrl));
      }

      if (pathname === "/admin/login") {
        return true;
      }

      if (pathname.startsWith("/admin")) {
        return isLoggedIn && isAdmin;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
