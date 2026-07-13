type ProductCardProps = {
  name: string;
  price: string;
  tag?: string;
};

export default function ProductCard({ name, price, tag }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="relative flex aspect-square items-center justify-center bg-gray-100">
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-2 py-1 text-xs font-medium text-white">
            {tag}
          </span>
        )}
        <span className="text-sm text-gray-400">Imagem do produto</span>
      </div>

      <div className="p-4">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="mt-1 text-sm text-gray-500">{price}</p>
        <button className="mt-3 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition-colors group-hover:bg-black">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}