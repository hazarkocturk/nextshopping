// db/prisma.ts (örnek)
import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Prisma } from '@/lib/generated/prisma';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });

type ProductScalars = Prisma.$ProductPayload['scalars'];

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price:  { compute: (p:ProductScalars) => p.price.toString() },
      rating: { compute: (p:ProductScalars) => p.rating.toString() },
    },
  },
});
