export default function AccountPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Hesabım
      </h1>


      <div className="mt-10 grid gap-6 md:grid-cols-3">


        <div className="border border-zinc-800 p-6">
          <h2 className="font-bold">
            Profil Bilgileri
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Kullanıcı bilgilerinizi yönetin.
          </p>
        </div>


        <div className="border border-zinc-800 p-6">
          <h2 className="font-bold">
            Siparişlerim
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Geçmiş siparişlerinizi görüntüleyin.
          </p>
        </div>


        <div className="border border-zinc-800 p-6">
          <h2 className="font-bold">
            Ayarlar
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Hesap ayarlarınızı düzenleyin.
          </p>
        </div>


      </div>

    </main>
  );
}