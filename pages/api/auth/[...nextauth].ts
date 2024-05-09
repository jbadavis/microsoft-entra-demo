import NextAuth, {AuthOptions} from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: AuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID ?? "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? "",
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  callbacks: {
    async session({ session, token}) {
      session.user.groups = token.groups;

      return session;
    },
    async jwt({ token, profile}) {
      if (profile) {
        token.groups = profile.groups 
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
