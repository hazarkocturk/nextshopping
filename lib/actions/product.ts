'use server';
import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts() {
  const prisma = new PrismaClient();
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