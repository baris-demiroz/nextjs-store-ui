export default function SearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">


      <h1 className="text-4xl font-bold">
        Arama
      </h1>


      <div className="mt-8">

        <input
          type="text"
          placeholder="Ürün ara..."
          className="w-full border border-zinc-800 px-5 py-4 outline-none focus:border-black"
        />

      </div>


      <div className="mt-10 border border-zinc-800 p-10 text-center text-zinc-500">

        Arama sonuçları burada gösterilecek.

      </div>


    </main>
  );
}