export default function Hero() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-24">
        <div className="max-w-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-500">
            Yeni Koleksiyon
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Geleceğin Teknolojisi Burada
          </h1>

          <p className="mb-8 text-lg text-zinc-300">
            Telefon, bilgisayar, kulaklık ve daha fazlasını keşfet.
          </p>

          <div className="flex gap-4">
            <button className="rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
              Alışverişe Başla
            </button>

            <button className="rounded-md border border-zinc-600 px-6 py-3 hover:bg-zinc-800">
              Ürünleri İncele
            </button>
          </div>
        </div>

        <div className="hidden lg:flex h-96 w-96 items-center justify-center rounded-xl bg-zinc-800 text-8xl">
          📱
        </div>
      </div>
    </section>
  );
}