import ProductGrid from "@/src/components/product/ProductGrid";
import { Product } from "@/src/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    brand: "Apple",
    price: 89999,
    image: "...",
  },
  {
    id: 2,
    name: "Galaxy S26",
    brand: "Samsung",
    price: 74999,
    image: "...",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-8 text-3xl font-bold">
        Öne Çıkan Ürünler
      </h2>

      <ProductGrid products={products} />
    </section>
  );
}