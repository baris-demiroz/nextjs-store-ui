const categories = [
  "📱 Telefon",
  "💻 Laptop",
  "⌚ Akıllı Saat",
  "🎧 Kulaklık",
  "📷 Kamera",
];

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-8 text-3xl font-bold">
        Kategoriler
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category}
            className="cursor-pointer rounded-md border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-lg font-medium">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}