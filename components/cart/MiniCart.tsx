import Link from "next/link";

export default function MiniCart() {
  return (
    <div className="absolute right-0 top-12 w-80 border border-zinc-800 bg-white p-5 shadow-xl">

      <h2 className="mb-5 text-lg font-bold">
        Sepetim
      </h2>


      <div className="space-y-4">

        <div className="flex gap-3 border-b pb-4">

          <div className="flex h-16 w-16 items-center justify-center bg-zinc-100 text-2xl">
            📱
          </div>


          <div className="flex-1">

            <p className="text-sm font-semibold">
              iPhone 17 Pro
            </p>

            <p className="text-sm text-zinc-500">
              1 x ₺89.999
            </p>

          </div>

        </div>


        <div className="flex justify-between font-bold">

          <span>
            Toplam
          </span>

          <span>
            ₺89.999
          </span>

        </div>


        <Link
          href="/cart"
          className="block bg-black py-3 text-center font-semibold text-white hover:bg-zinc-800"
        >
          Sepete Git
        </Link>

      </div>

    </div>
  );
}