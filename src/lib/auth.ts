// lib/auth.ts
import NextAuth from 'next-auth';
import authConfig from '@/auth.config';

const handler = NextAuth(authConfig);

export const GET = handler.GET;
export const POST = handler.POST;
