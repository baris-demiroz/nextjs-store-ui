interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const categories = {
  telefon: {
    title: "Telefon",
    description: "Akıllı telefon modelleri",
  },

  laptop: {
    title: "Laptop",
    description: "Dizüstü bilgisayar modelleri",
  },

  kulaklik: {
    title: "Kulaklık",
    description: "Ses ürünleri",
  },
};


export default function CategoryPage({
  params,
}: CategoryPageProps) {

  const category = categories[params.slug as keyof typeof categories];


  if (!category) {
    return (
      <div className="p-10">
        Kategori bulunamadı
      </div>
    );
  }


  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        {category.title}
      </h1>


      <p className="mt-3 text-zinc-500">
        {category.description}
      </p>


      <div className="mt-10">
        {/* Buraya ProductGrid gelecek */}
        
        Ürünler burada listelenecek

      </div>

    </main>
  );
}