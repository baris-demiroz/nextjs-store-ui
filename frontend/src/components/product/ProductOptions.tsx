export default function ProductOptions() {
  return (
    <>
      <div className="mt-10">
        <h3 className="mb-3 font-semibold">
          Renk
        </h3>

        <div className="flex gap-3">
          <button className="h-10 w-10 rounded-full border border bg-zinc-900" />

          <button className="h-10 w-10 rounded-full border bg-gray-300" />

          <button className="h-10 w-10 rounded-full border bg-blue-600" />

          <button className="h-10 w-10 rounded-full border bg-yellow-300" />
        </div>
      </div>


      <div className="mt-10">
        <h3 className="mb-3 font-semibold">
          Depolama
        </h3>

        <div className="flex gap-3">
          <button className="rounded-md bg-zinc-900  border border-black px-5 py-2">
            128 GB
          </button>

          <button className="rounded-md bg-zinc-900 px-5 py-2 hover:border-black">
            256 GB
          </button>

          <button className="rounded-md  bg-zinc-900 px-5 py-2 hover:border-black">
            512 GB
          </button>
        </div>
      </div>


      <div className="mt-10">
        <h3 className="mb-3 font-semibold">
          Adet
        </h3>

        <div className="flex w-fit items-center bg-zinc-900 rounded-md">
          <button className="px-5 py-3 hover:bg-zinc-800">
            -
          </button>

          <span className="px-6">
            1
          </span>

          <button className="px-5 py-3 hover:bg-zinc-800">
            +
          </button>
        </div>
      </div>


      <div className="mt-10 flex gap-4">
        <button className="flex-1 rounded-md bg-zinc-900 py-4 font-semibold text-white transition hover:bg-zinc-800">
          Sepete Ekle
        </button>

        <button className="rounded-md  bg-zinc-900  px-6 hover:bg-zinc-800">
          ♡
        </button>
      </div>
    </>
  );
}