const features = [
  {
    title: "Ücretsiz Kargo",
    icon: "🚚",
  },
  {
    title: "Güvenli Ödeme",
    icon: "🔒",
  },
  {
    title: "Kolay İade",
    icon: "↩️",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-md border border-zinc-800 p-8 text-center"
          >
            <div className="mb-4 text-5xl">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}