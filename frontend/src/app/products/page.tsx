import ProductGrid from "@/src/components/product/ProductGrid";
import { getProducts } from "@/src/api/product.api";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">Products</h1>

      <ProductGrid products={products} />
    </main>
  );
}