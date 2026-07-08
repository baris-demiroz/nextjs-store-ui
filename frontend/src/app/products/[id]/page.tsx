import { getProduct } from "@/src/api/product.api";
import ProductGallery from "@/src/components/product/ProductGallery";
import ProductInfo from "@/src/components/product/ProductInfo";
import ProductOptions from "@/src/components/product/ProductOptions";
import ProductSpecs from "@/src/components/product/ProductSpecs";
import RelatedProducts from "@/src/components/product/RelatedProducts";
import StickyCart from "@/src/components/product/StickyCart";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-10 pb-32">
        <div className="mb-8 text-sm text-zinc-500">
          Ana Sayfa / Telefonlar / Apple / {product.name}
        </div>

        <section className="grid gap-12 lg:grid-cols-2">
          <ProductGallery product={product} />

          <div>
            <ProductInfo product={product} />
            <ProductOptions />
          </div>
        </section>

        <ProductSpecs />

        <RelatedProducts/>
      </main>

      <StickyCart />
    </>
  );
}