import NextAuth, { DefaultSession }  from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      groups: string[];
    } & DefaultSession["user"]
  }
  interface Profile {
    groups: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    groups: string[];
  }
}
