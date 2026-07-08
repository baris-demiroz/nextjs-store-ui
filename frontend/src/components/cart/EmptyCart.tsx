export default function EmptyCart() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center border border-zinc-800">

      <div className="text-7xl">
        🛒
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        Sepetiniz Boş
      </h2>

      <p className="mt-2 text-zinc-500">
        Alışverişe başlamak için ürünlere göz atın.
      </p>


      <button className="mt-6 bg-black px-8 py-3 text-white">
        Ürünlere Git
      </button>

    </div>
  );
}