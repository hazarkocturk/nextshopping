import type { Product as PrismaProduct } from '@/lib/generated/prisma';

export type ProductDTO = Omit<PrismaProduct, 'price' | 'rating'> & {
    price: number;
    rating: number;
    };