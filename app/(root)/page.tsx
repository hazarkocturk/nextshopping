import ProductList from "@/components/shared/product-list";
import { getLatestProducts } from "@/lib/actions/product";
import { toProductsDTO } from "@/lib/mappers/product";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export default async function Home() {
  await delay(2000); 
  const products = await getLatestProducts();
  const result = toProductsDTO(products);

  return (
    <>
      <h1>Hello</h1>
      <ProductList products={result} title="Featured Products" limit={4} />
    </>
  );
}
