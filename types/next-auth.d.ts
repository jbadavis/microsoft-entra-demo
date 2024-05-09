import NextAuth  from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      groups: string[];
    } 
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
