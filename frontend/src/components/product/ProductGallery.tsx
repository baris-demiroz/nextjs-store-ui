import { Product } from "@/src/types/product";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  return (
    <div>
      <div className="flex aspect-square items-center justify-center rounded-md border border-zinc-300 bg-zinc-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-md object-contain"
          />
        ) : (
          <span className="text-8xl">📱</span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex aspect-square cursor-pointer items-center justify-center rounded-md border border-zinc-300 bg-zinc-100 transition hover:border-black"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full rounded-md object-contain"
              />
            ) : (
              "📱"
            )}
          </div>
        ))}
      </div>
    </div>
  );
}