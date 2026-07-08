export default function FavoritesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Favorilerim
      </h1>


      <div className="mt-10 flex min-h-[300px] flex-col items-center justify-center border border-zinc-800">

        <div className="text-6xl">
          ❤️
        </div>


        <h2 className="mt-5 text-2xl font-bold">
          Favori ürününüz yok
        </h2>


        <p className="mt-2 text-zinc-500">
          Beğendiğiniz ürünleri favorilere ekleyebilirsiniz.
        </p>

      </div>

    </main>
  );
}