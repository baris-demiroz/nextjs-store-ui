export default function StickyCart() {
  return (
    <div className="sticky top-16 z-40 border-y border-zinc-800 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div>
          <p className="text-sm text-zinc-500">
            Apple
          </p>

          <h3 className="font-semibold">
            iPhone 17 Pro Max
          </h3>
        </div>


        <div className="flex items-center gap-6">

          <p className="text-xl font-bold">
            ₺89.999
          </p>

          <button className="bg-black px-8 py-3 font-semibold text-white transition hover:bg-zinc-800">
            Sepete Ekle
          </button>

        </div>

      </div>

    </div>
  );
}