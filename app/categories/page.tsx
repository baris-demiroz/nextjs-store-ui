import CategoryGrid from "@/components/category/CategoryGrid";

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Kategoriler
        </h1>

        <p className="mt-3 text-zinc-500">
          İhtiyacınız olan teknoloji ürünlerini kategorilerden keşfedin.
        </p>

      </div>


      <CategoryGrid />

    </main>
  );
}