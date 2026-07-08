export default function ProductSpecs() {
  const specs = [
    ["Marka", "Apple"],
    ["Ekran", '6.9" OLED 120Hz'],
    ["İşlemci", "A19 Pro"],
    ["RAM", "12 GB"],
    ["Depolama", "256 GB"],
    ["Kamera", "48 MP Pro Kamera"],
    ["Pil", "5200 mAh"],
    ["Bağlantı", "USB-C"],
  ];

  return (
    <section className="mt-24 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Teknik Özellikler
        </h2>

        <p className="mt-2 text-zinc-500">
          Ürün hakkında detaylı teknik bilgiler.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {specs.map(([title, value]) => (
          <div
            key={title}
            className="group rounded-md border border-zinc-800 bg-zinc-900 p-5 transition hover:border-black hover:shadow-md"
          >
            <p className="text-sm text-zinc-300">
              {title}
            </p>

            <p className="mt-2 text-lg font-semibold text-zinc-300">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}