import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const NEXT_AUTH = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    //   CredentialProvider({
    //     name: "credentials",
    //     credentials: {
    //       email: { label: "email", type: "email", placeholder: "Email" },
    //       password: {
    //         label: "password",
    //         type: "password",
    //         placeholder: "Password",
    //       },
    //     },
    //     async authorize(credentials) {
    //       console.log(credentials?.email);
    //       console.log(credentials?.password);

    //       return {
    //         id: "user1",
    //         name: "John Doe",
    //         email: "jhondoe@gamil.com",
    //       };
    //     },
    //   }),
  ],
  callbacks: {
    jwt: ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
