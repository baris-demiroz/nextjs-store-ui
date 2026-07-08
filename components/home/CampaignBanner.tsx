export default function CampaignBanner() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-16">
        <div>
          <p className="text-sm uppercase">
            Kampanya
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            %25'e Varan İndirim
          </h2>

          <p className="mt-4 text-lg">
            Seçili telefonlarda fırsatları kaçırma.
          </p>
        </div>

        <button className="rounded-md bg-white px-6 py-3 font-semibold text-blue-600">
          Kampanyayı Gör
        </button>
      </div>
    </section>
  );
}