import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Resim */}
      <div className="aspect-square overflow-hidden bg-zinc-800">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-zinc-100">
            <span className="text-6xl opacity-40">📦</span>
          </div>
        )}
      </div>

      {/* Bilgiler */}
      <div className="space-y-2 p-4">
        <p className="text-xs uppercase tracking-wider text-zinc-300">
          {product.brand}
        </p>

        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-zinc-300 group-hover:text-blue-600">
          {product.name}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-zinc-300">
            ₺{product.price.toLocaleString("tr-TR")}
          </span>

          <span className="border border-zinc-100 px-2 py-1 text-xs font-medium transition group-hover:bg-zinc-900 group-hover:text-white">
            İncele
          </span>
        </div>
      </div>
    </Link>
  );
}