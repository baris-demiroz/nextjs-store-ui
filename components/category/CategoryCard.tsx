import Link from "next/link";

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
}

export default function CategoryCard({
  name,
  icon,
  count,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${name.toLowerCase()}`}
      className="group flex flex-col items-center justify-center border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
    >

      <div className="text-6xl transition group-hover:scale-110">
        {icon}
      </div>


      <h2 className="mt-5 text-xl font-bold">
        {name}
      </h2>


      <p className="mt-2 text-sm text-zinc-500 group-hover:text-zinc-300">
        {count} ürün
      </p>

    </Link>
  );
}