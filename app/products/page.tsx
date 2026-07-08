import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro M4",
    brand: "Apple",
    price: 79999,
    image: "",
  },
  {
    id: 2,
    name: "iPhone 17",
    brand: "Apple",
    price: 64999,
    image: "",
  },
  {
    id: 3,
    name: "Galaxy S26",
    brand: "Samsung",
    price: 58999,
    image: "",
  },
  {
    id: 4,
    name: "MX Master 4",
    brand: "Logitech",
    price: 5499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aX7qXGVtlrGsaUMnKPXNHGUlgojvoh-aV1gMcN0l2u2r-R6dBKQi7XA&s=10",
  },
  {
    id: 5,
    name: "AirPods Pro",
    brand: "Apple",
    price: 12999,
    image: "https://cdn-sw.spidersweb.pl/2025/09/iphone-17-pro-0001.webp",
  },
  {
    id: 6,
    name: "Galaxy Watch",
    brand: "Samsung",
    price: 10999,
    image: "",
  },
  {
    id: 7,
    name: "Magic Keyboard",
    brand: "Apple",
    price: 6499,
    image: "",
  },
  {
    id: 8,
    name: "Logitech G Pro X",
    brand: "Logitech",
    price: 4999,
    image: "",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">Products</h1>

      <ProductGrid products={products} />
    </main>
  );
}