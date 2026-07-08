import { Product } from "@/src/types/product";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        {product.brand}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-yellow-500">
          ★★★★★
        </span>

        <span className="text-zinc-500">
          (245 Değerlendirme)
        </span>
      </div>

      <p className="mt-6 text-4xl font-bold">
        ₺{product.price.toLocaleString("tr-TR")}
      </p>

      <p className="mt-6 leading-7 text-zinc-600">
        {product.description ? product.description : "Bu ürün için açıklama bulunmamaktadır."}
      </p>
    </div>
  );
}