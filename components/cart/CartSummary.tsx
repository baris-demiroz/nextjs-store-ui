export default function CartSummary() {
  return (
    <div className="border border-zinc-800 bg-white p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Sipariş Özeti
      </h2>


      <div className="space-y-4 text-zinc-600">

        <div className="flex justify-between">
          <span>Ara Toplam</span>
          <span>
            ₺159.998
          </span>
        </div>


        <div className="flex justify-between">
          <span>Kargo</span>
          <span>
            Ücretsiz
          </span>
        </div>


        <div className="border-t pt-4 flex justify-between text-xl font-bold text-black">
          <span>
            Toplam
          </span>

          <span>
            ₺159.998
          </span>
        </div>

      </div>


      <button className="mt-8 w-full bg-black py-4 font-semibold text-white transition hover:bg-zinc-800">
        Ödemeye Geç
      </button>

    </div>
  );
}