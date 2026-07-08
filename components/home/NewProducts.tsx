import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types/product";

export default function NewProducts() {

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
    

    
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-8 text-3xl font-bold">
        Yeni Gelenler
      </h2>

       <ProductGrid products={products} />
    </section>
  );
}