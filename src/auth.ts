import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [GoogleProvider({
        clientId: "20170320856-gih4gomovnhhll3e6cvcen67rp95qd08.apps.googleusercontent.com",
        clientSecret: "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"
    })]
})