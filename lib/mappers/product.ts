import type { Product as PrismaProduct } from '@/lib/generated/prisma';
import type { ProductDTO } from '@/types/product';

export function toProductDTO(p: PrismaProduct): ProductDTO {
  return {
    ...p,
    price: typeof p.price === 'object' && 'toNumber' in p.price
      ? p.price.toNumber()
      : Number(p.price),
    rating: typeof p.rating === 'object' && 'toNumber' in p.rating
      ? p.rating.toNumber()
      : Number(p.rating),
    images: p.images ?? [],
    isFeatured: p.isFeatured ?? false,
    createdAt: p.createdAt,
  };
}

export function toProductsDTO(products: PrismaProduct[]): ProductDTO[] {
  return products.map(toProductDTO);
}
