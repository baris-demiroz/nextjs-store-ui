import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductOptions from "@/components/product/ProductOptions";
import ProductSpecs from "@/components/product/ProductSpecs";
import RelatedProducts from "@/components/product/RelatedProducts";
import StickyCart from "@/components/product/StickyCart";

export default function ProductDetailPage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-10 pb-32">

        <div className="mb-8 text-sm text-zinc-500">
          Ana Sayfa / Telefonlar / Apple / iPhone 17 Pro
        </div>

        <section className="grid gap-12 lg:grid-cols-2">
          <ProductGallery />

          <div>
            <ProductInfo />
            <ProductOptions />
          </div>
        </section>

        <ProductSpecs />

        <RelatedProducts />

      </main>

      <StickyCart />
    </>
  );
}