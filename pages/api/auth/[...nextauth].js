import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../libs/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      async onError(error) {
        console.error("GitHub Provider Error:", error);
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      async onError(error) {
        console.error("Google Provider Error:", error);
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("User signing in:", user);
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirecting to:", url);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      console.log("Session callback:", session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT callback:", token);
      return token;
    }
  },
  events: {
    async signIn(message) { console.log("User signed in:", message); },
    async signOut(message) { console.log("User signed out:", message); },
    async createUser(message) { console.log("User created:", message); },
    async updateUser(message) { console.log("User updated:", message); },
    async linkAccount(message) { console.log("Account linked:", message); },
    async session(message) { console.log("Session created:", message); },
    async error(message) { console.error("Error event:", message); }
  },
  debug: true // Enable debug mode to get more information in the console
}

export default NextAuth(authOptions)
