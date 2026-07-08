interface CartItemProps {
  name: string;
  brand: string;
  price: number;
  image?: string;
}

export default function CartItem({
  name,
  brand,
  price,
  image,
}: CartItemProps) {
  return (
    <div className="flex gap-6 border border-zinc-800 bg-white p-5">

      <div className="flex h-32 w-32 items-center justify-center bg-zinc-100 text-5xl">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          "📱"
        )}
      </div>


      <div className="flex flex-1 flex-col justify-between">

        <div>
          <p className="text-sm text-zinc-500">
            {brand}
          </p>

          <h2 className="text-xl font-semibold">
            {name}
          </h2>

          <p className="mt-2 text-lg font-bold">
            ₺{price.toLocaleString("tr-TR")}
          </p>
        </div>


        <div className="mt-4 flex items-center gap-4">

          <div className="flex items-center border">
            <button className="px-4 py-2 hover:bg-zinc-100">
              -
            </button>

            <span className="px-5">
              1
            </span>

            <button className="px-4 py-2 hover:bg-zinc-100">
              +
            </button>
          </div>


          <button className="text-sm text-zinc-500 hover:text-black">
            Kaldır
          </button>

        </div>

      </div>

    </div>
  );
}