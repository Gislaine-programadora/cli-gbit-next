type StockRowProps = {
  product: string;
  sku: string;
  quantity: number;
  status: "Disponível" | "Baixo estoque" | "Esgotado";
};

const statusColor: Record<StockRowProps["status"], string> = {
  Disponível: "bg-emerald-100 text-emerald-700",
  "Baixo estoque": "bg-amber-100 text-amber-700",
  Esgotado: "bg-red-100 text-red-700",
};

export default function StockRow({ product, sku, quantity, status }: StockRowProps) {
  return (
    <tr className="border-b border-gray-100 text-sm">
      <td className="py-3 font-medium text-gray-900">{product}</td>
      <td className="py-3 text-gray-500">{sku}</td>
      <td className="py-3 text-gray-500">{quantity} un</td>
      <td className="py-3">
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColor[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}