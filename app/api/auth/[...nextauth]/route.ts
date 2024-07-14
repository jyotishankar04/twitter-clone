import NextAuth from "next-auth/next";
import { NEXT_AUTH } from "@/auth";

const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
