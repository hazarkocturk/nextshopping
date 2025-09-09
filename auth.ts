import { compareSync } from 'bcrypt-ts-edge';
import NextAuthConfig from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from '@/db/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';