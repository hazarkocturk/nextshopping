import ProductList from "@/components/shared/product-list";
import { getLatestProducts } from "@/lib/actions/product";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export default async function Home() {
  await delay(2000); 
  const products = await getLatestProducts();


  return (
    <>
      <h1>Hello</h1>
      <ProductList products={products} title="Featured Products" limit={4} />
    </>
  );
}
