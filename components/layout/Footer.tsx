export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            MyStore
          </h2>

          <p className="text-sm text-zinc-400">
            En yeni teknoloji ürünlerini uygun fiyatlarla keşfedin.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">
            Alışveriş
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Telefonlar</li>
            <li>Laptoplar</li>
            <li>Kulaklıklar</li>
            <li>Akıllı Saatler</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">
            Kurumsal
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Hakkımızda</li>
            <li>İletişim</li>
            <li>Kariyer</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">
            Destek
          </h3>

          <ul className="space-y-2 text-sm">
            <li>S.S.S.</li>
            <li>Kargo Takibi</li>
            <li>İade Politikası</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 MyStore. Tüm hakları saklıdır.</p>

          <p>Next.js • React • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}