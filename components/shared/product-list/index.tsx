import ProductCard from '../product-card';
import type { Product } from '@/types';

export default function ProductList({  products, title, limit } : {products: Product[], title?: string, limit?: number}) {
   const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className='my-10'>
    <h2 className='h2-bold mb-4'>{title}</h2>
    {displayedProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {displayedProducts.map((product,index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
    ) : (
      <div>
        <p>No product found</p>
      </div>
    )}
  </div>
  );
}