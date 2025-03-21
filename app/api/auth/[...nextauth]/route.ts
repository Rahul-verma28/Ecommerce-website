
// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcrypt";
// import { connectToDB } from "@/lib/mongoDB";
// import User from "@/lib/models/users";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         try {
//           await connectToDB();
//           const user = await User.findOne({ email });
//           if (!user) {
//             return null;
//           }
//           const passwordsMatch = await bcrypt.compare(
//             password,
//             user.password
//           );
//           if (!passwordsMatch) {
//             return null;
//           }
//           return user;
//         } catch (error) {
//           console.log("Error:", error);
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async signIn({ user, account }: { user: any; account: any }) {
//       if (account.provider === "google") {
//         try {
//           const { name, email } = user;
//           await connectToDB();
//           const ifUserExists = await User.findOne({ email });
//           if (ifUserExists) {
//             return user;
//           }
//           const newUser = new User({
//             name: name,
//             email: email,
//             image: user.image,
//           });
//           const res = await newUser.save();
//           if (res.status === 200 || res.status === 201) {
//             console.log(res)
//             return user;
//           }

//         } catch (err) {
//           console.log(err);
//         }
//       }
//       return user;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.email = user.email;
//         token.name = user.name;
//       }
//       return token;
//     },

//     async session({ session, token }: { session: any; token: any }) {
//       if (session.user) {
//         session.user.email = token.email;
//         session.user.name = token.name;
//       }
//       console.log(session);
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET!,
//   pages: {
//     signIn: "/",
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



import NextAuth, { NextAuthOptions, User as NextAuthUser, Account, Session, JWT } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { connectToDB } from "@/lib/mongoDB";
import User from "@/lib/models/users";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          await connectToDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }: { user: NextAuthUser; account: Account }) {
      if (account.provider === "google") {
        try {
          const { name, email } = user;
          await connectToDB();
          const ifUserExists = await User.findOne({ email });
          if (ifUserExists) {
            return true;
          }
          const newUser = new User({
            name: name,
            email: email,
            image: user.image,
          });
          await newUser.save();
          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      console.log(session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };