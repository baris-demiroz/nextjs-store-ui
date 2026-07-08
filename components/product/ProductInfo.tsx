export default function ProductInfo() {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        Apple
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        iPhone 17 Pro Max
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-yellow-500">
          ★★★★★
        </span>

        <span className="text-zinc-500">
          (245 Değerlendirme)
        </span>
      </div>

      <p className="mt-6 text-4xl font-bold">
        ₺89.999
      </p>

      <p className="mt-6 leading-7 text-zinc-600">
        Yeni nesil A19 işlemci, gelişmiş kamera sistemi,
        120Hz OLED ekran ve gün boyu pil ömrü ile en güçlü
        iPhone deneyimini yaşayın.
      </p>
    </div>
  );
}