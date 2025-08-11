'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: LATEST_PRODUCTS_LIMIT,
    });
    return convertToPlainObject(products);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findFirst({
    where :{slug: slug},
  });
}