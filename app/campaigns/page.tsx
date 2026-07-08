export default function CampaignsPage() {
  const campaigns = [
    {
      title: "Yaz Teknoloji Fırsatları",
      description:
        "Seçili telefon ve bilgisayarlarda büyük indirimler.",
      discount: "%30 İndirim",
      icon: "🔥",
    },

    {
      title: "Yeni Üyelere Özel",
      description:
        "İlk alışverişinizde özel fırsatlardan yararlanın.",
      discount: "₺500 Kupon",
      icon: "🎁",
    },

    {
      title: "Ücretsiz Kargo",
      description:
        "Belirli ürünlerde kargo ücreti bizden.",
      discount: "KARGO BEDAVA",
      icon: "🚚",
    },

    {
      title: "Oyuncu Ekipmanları",
      description:
        "Gaming ürünlerinde kaçırılmayacak fırsatlar.",
      discount: "%20 İndirim",
      icon: "🎮",
    },
  ];


  return (
    <main className="mx-auto max-w-7xl px-6 py-12">


      {/* Header */}
      <section className="mb-12">

        <h1 className="text-4xl font-bold">
          Kampanyalar
        </h1>

        <p className="mt-3 text-zinc-500">
          Güncel fırsatlar ve özel indirimleri keşfedin.
        </p>

      </section>



      {/* Hero Campaign */}
      <section className="mb-12 flex min-h-[280px] flex-col justify-center bg-black p-10 text-white">

        <span className="text-5xl">
          ⚡
        </span>


        <h2 className="mt-5 text-4xl font-bold">
          Büyük Teknoloji İndirimi
        </h2>


        <p className="mt-3 max-w-xl text-zinc-300">
          Telefon, laptop ve aksesuar ürünlerinde
          kaçırılmayacak fırsatlar.
        </p>


        <button className="mt-8 w-fit bg-white px-8 py-3 font-semibold text-black">
          Alışverişe Başla
        </button>


      </section>




      {/* Campaign Cards */}
      <section>

        <h2 className="mb-8 text-3xl font-bold">
          Aktif Kampanyalar
        </h2>


        <div className="grid gap-6 md:grid-cols-2">


          {campaigns.map((campaign) => (

            <div
              key={campaign.title}
              className="border border-zinc-800 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-5xl">
                {campaign.icon}
              </div>


              <h3 className="mt-5 text-2xl font-bold">
                {campaign.title}
              </h3>


              <p className="mt-3 text-zinc-500">
                {campaign.description}
              </p>



              <div className="mt-6 inline-block border border-black px-4 py-2 font-bold">
                {campaign.discount}
              </div>


            </div>

          ))}


        </div>


      </section>


    </main>
  );
}