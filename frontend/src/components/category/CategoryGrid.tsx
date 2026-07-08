import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Telefon",
    icon: "📱",
    count: 120,
  },
  {
    name: "Laptop",
    icon: "💻",
    count: 80,
  },
  {
    name: "Tablet",
    icon: "📟",
    count: 45,
  },
  {
    name: "Kulaklık",
    icon: "🎧",
    count: 90,
  },
  {
    name: "Akıllı Saat",
    icon: "⌚",
    count: 35,
  },
  {
    name: "Oyuncu",
    icon: "🎮",
    count: 60,
  },
];


export default function CategoryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          {...category}
        />
      ))}

    </div>
  );
}