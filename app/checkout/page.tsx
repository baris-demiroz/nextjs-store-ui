export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">


      <h1 className="text-4xl font-bold">
        Ödeme
      </h1>


      <div className="mt-10 grid gap-8 lg:grid-cols-2">


        <section className="border border-zinc-800 p-6">

          <h2 className="mb-6 text-xl font-bold">
            Teslimat Bilgileri
          </h2>


          <div className="space-y-4">

            <input
              placeholder="Ad Soyad"
              className="w-full border p-3"
            />


            <input
              placeholder="Adres"
              className="w-full border p-3"
            />


            <input
              placeholder="Telefon"
              className="w-full border p-3"
            />

          </div>

        </section>


        <section className="border border-zinc-800 p-6">

          <h2 className="mb-6 text-xl font-bold">
            Sipariş Özeti
          </h2>


          <div className="flex justify-between">
            <span>Toplam</span>

            <span className="font-bold">
              ₺159.998
            </span>
          </div>


          <button className="mt-8 w-full bg-black py-4 font-semibold text-white">
            Siparişi Tamamla
          </button>


        </section>


      </div>


    </main>
  );
}