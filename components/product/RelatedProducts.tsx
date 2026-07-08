export default function RelatedProducts() {
  return (
    <section className="mt-24">
      <h2 className="mb-8 text-3xl font-bold">
        Benzer Ürünler
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-md border border-zinc-800"
          >
            <div className="flex aspect-square items-center justify-center bg-zinc-100 text-6xl">
              📱
            </div>

            <div className="space-y-2 p-4">
              <p className="text-sm text-zinc-500">
                Apple
              </p>

              <h3 className="font-semibold">
                iPhone 17
              </h3>

              <p className="text-xl font-bold">
                ₺69.999
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}