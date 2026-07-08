export default function ProductGallery() {
  return (
    <div>
      <div className="flex aspect-square items-center justify-center rounded-md border border-zinc-300 bg-zinc-100">
        <span className="text-8xl">📱</span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex aspect-square cursor-pointer items-center justify-center rounded-md border border-zinc-300 bg-zinc-100 transition hover:border-black"
          >
            📱
          </div>
        ))}
      </div>
    </div>
  );
}